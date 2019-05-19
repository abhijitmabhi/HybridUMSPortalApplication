import { Component, OnInit } from '@angular/core';
import { CoursesResultsService } from 'src/app/Services/student/courses-results.service';
import { LoadingService } from 'src/app/Core/loader/loading.service';
import { CommonService } from 'src/app/Services/common/common.service';

@Component({
  selector: 'app-courses-results',
  templateUrl: './courses-results.page.html',
  styleUrls: ['./courses-results.page.scss'],
})
export class CoursesResultsPage implements OnInit {

  midHideFlag  = true;
  finalHideFlag = true;

  semesterList:any;
  courseList:any;
  nrSelect: any;
  nrSelect1: any;
  midtermResult:any;
  finaltermResult:any;

  courseName:any;
  finalGradeText:any;

  constructor(
    private coursesResultsService : CoursesResultsService,
    private commonService: CommonService,
    private loadingService: LoadingService
  ) { }

  onMidTerm = ()=>{
    this.midHideFlag = !this.midHideFlag;
  };

  onFinalTerm = ()=>{
    this.finalHideFlag = !this.finalHideFlag;
  };
  
  ngOnInit() {
    this.getCoursesResults();
  }

  getCoursesResults(){
    this.commonService.semesterList().subscribe(semesterLists => {

      //get all semesters
      this.semesterList = semesterLists.Data;

      //get current semester if exist
      this.commonService.currentSemester().subscribe(currentSemester => {
        let currentSemesterId = currentSemester.Data.ID;
        let isCurrentSemesterEnrolled = false;
        this.semesterList.forEach(semester => {
          if(semester.ID === currentSemesterId){
            isCurrentSemesterEnrolled = true;
          }
        });

        if(isCurrentSemesterEnrolled){
          this.nrSelect = currentSemesterId;
        }else {
          this.nrSelect = this.semesterList[0].ID;
        }
      });
    });
  }

  onChangeSemester(){

    this.commonService.registeredCoursesBySemester(this.nrSelect).subscribe(res => {
      this.courseList = res.Data;
      this.nrSelect1 = this.courseList[0].Section.ID;
    });
  }

  onChangeCourse(){

    this.loadingService.loadingStart();

    this.courseList.filter(el =>{
      if(el.Section.ID == this.nrSelect1){
        this.courseName = el.Section.Description;
        this.finalGradeText = el.FinalGradeText;
      }
    });

    this.coursesResultsService.getCoursesAndResults(this.nrSelect, this.nrSelect1).subscribe(res =>{

      this.midtermResult = res.Data.Exams[0];
      this.finaltermResult = res.Data.Exams[1];

      console.log(this.midtermResult );
      console.log(this.finaltermResult );
    });

    this.loadingService.loadingDismiss();
  }
}
