import { OfferedCoursesService } from './../../../Services/student/offered-courses.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

NgModule({
  imports: [
    Component,
    MatPaginator,
    MatTableDataSource
  ]
})

export interface OfferedCourses {
  Description: any;
  StudentCount: any;
  Capacity: any;
}

@Component({
  selector: 'app-offered-courses',
  templateUrl: './offered-courses.page.html',
  styleUrls: ['./offered-courses.page.scss'],
})

export class OfferedCoursesPage implements OnInit {
  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['course', 'time'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  
  constructor(private offeredCoursesService: OfferedCoursesService) { }

  ngOnInit() {
    this.offeredCoursesService.getOfferedCourses().subscribe(res => {
      this.listData = new MatTableDataSource(res.Data);
      this.listData.paginator = this.paginator;
      console.log(this.listData);
    });
    // this.dataSource.paginator = this.paginator;
  }

  getOfferedCourses(){
    this.offeredCoursesService.getOfferedCourses().subscribe(res => {
      this.listData = new MatTableDataSource(res.Data);
      this.listData.paginator = this.paginator;
      console.log(this.listData);
    });
  }
}

// const ELEMENT_DATA: OfferedCourses[] = [
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - ADVANCED COMPUTER NETWORKS [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'},
//   {course: '00001 - HAHAHA HAHAHA HAHAHAH [A] 37/40', time1: 'Th: S 10:00 AM - 12:00 PM [3103]', time2: 'Lab: T 11:00 AM - 02:AM [D0202]'}
// ];
