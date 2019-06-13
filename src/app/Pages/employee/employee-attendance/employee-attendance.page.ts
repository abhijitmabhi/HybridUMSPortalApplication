
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { EmployeeAttendanceService } from 'src/app/Services/employee/employee-attendance.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.page.html',
  styleUrls: ['./employee-attendance.page.scss'],
})
export class EmployeeAttendancePage implements OnInit {

  constructor(public attService: EmployeeAttendanceService, private datePipe: DatePipe) { }

  payrollList = [];
  attendanceList: any;
  nrSelect: any;
  private currentDateTime = new Date();
  private today = this.datePipe.transform(this.currentDateTime, 'dd-MMM-yyyy');

  //JAOWAT's CUSTOMISE
  // isCurrentMonth = false;
  // attendanceCurrentMonth:any;

  //ProgressBar
  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  ngOnInit() {
    this.getPayroll();
  }

  getPayroll() {
    this.attService.getPayroll().subscribe(res => {
      this.generatePayrollDropdown(res.Data);
    });
  }

  generatePayrollDropdown(payrolls) {

    payrolls.forEach(payroll => {
      let year = payroll.PayrollYear;
      let split = payroll.PayMonth.split(" ");
      let month = split[0];

      this.payrollList.push({
        Name: `${year},${month}`,
        Value: payroll.ID
      });
    });
    this.payrollList = this.payrollList.slice().reverse();
    this.nrSelect = this.payrollList[0].Value;
  }


  onChangePayroll(){
    this.attendanceList = null;
    this.attService.getAttendance(this.nrSelect).subscribe(res => {
      this.attendanceList = res.Data;
      console.log(this.attendanceList);
      this.attendanceList.AttendanceDetailModels.forEach(element => {
        element.InOut = element.InOut.replace(/<b>/g, '').replace(/<\/b>/g, '').replace(/<br \/>/g, '');
      });

      //JAOWAT's Customise
      // let isStart = false;
      // this.attendanceCurrentMonth = this.attendanceList.AttendanceDetailModels.slice().reverse().filter(e =>{
      //   if(e.InOut.match(/IN/) || (isStart && e.InOut.match(/[ Weekly Holiday ]/)))
      //   {
      //     isStart = true;
      //     return e;
      //   }
      // });
      // let split = this.attendanceCurrentMonth[0].Date.split('-');
      // let currDate = new Date();
      // let currYear = currDate.getFullYear();
      // let currMonth = this.month_name(new Date()).substring(0, 3);
      // if(currYear == split[2] && currMonth == split[1]) this.isCurrentMonth = true;
      // else this.isCurrentMonth = false;
    });
  }
  //JAOWAT's Customise
  // month_name(dt){
  //   let mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  //     return mlist[dt.getMonth()];
  // };
}
