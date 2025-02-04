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
  private firstDateOfCurrentMonth = new Date(this.currentDateTime.getFullYear(), this.currentDateTime.getMonth(), 1);
  private forMattedfirstDateOfCurrentMonth = this.datePipe.transform(this.firstDateOfCurrentMonth, 'dd-MMM-yyyy');
  private today = this.datePipe.transform(this.currentDateTime, 'dd-MMM-yyyy');

  isCurrentMonth = false;
  attendanceCurrentMonth: any;
  currentPayroll: any;
  isCurrentPayroll: any;

  //ProgressBar
  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  ngOnInit() {
    this.getPayroll();
  }

  isExpanded(attendanceDate, today) {
    return attendanceDate == today ? true : false;
  }

  getPayroll() {
    this.attService.getPayroll().subscribe(res => {
      this.generatePayrollDropdown(res.Data);
    });
  }

  generatePayrollDropdown(payrolls) {
    payrolls.forEach(payroll => {
      if (payroll.IsCurrent == true) this.currentPayroll = payroll.ID;
      let year = payroll.PayrollYear;
      let split = payroll.PayMonth.split(" ");
      let month = split[0];
      this.payrollList.push({
        Name: `${year}, ${month}`,
        Value: payroll.ID
      });
    });

    this.payrollList = this.payrollList.slice().reverse();
    this.nrSelect = this.currentPayroll;
    this.onChangePayroll();
  }

  onChangePayroll() {
    this.attendanceList = null;
    this.isCurrentPayroll = this.nrSelect === this.currentPayroll ? true : false;
    if (this.nrSelect !== null && this.nrSelect !== undefined && this.nrSelect !== "") {
      this.attService.getAttendance(this.nrSelect).subscribe(res => {
        this.attendanceList = res.Data;
      });
    }
  }

  month_name(dt) {
    let mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return mlist[dt.getMonth()];
  };
}