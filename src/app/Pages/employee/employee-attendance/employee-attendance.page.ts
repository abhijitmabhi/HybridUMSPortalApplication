import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { EmployeeAttendanceService } from 'src/app/Services/employee/employee-attendance.service';


@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.page.html',
  styleUrls: ['./employee-attendance.page.scss'],
})
export class EmployeeAttendancePage implements OnInit {

  constructor(public attService: EmployeeAttendanceService) { }

  payrollList = [];
  attendanceList: any;
  nrSelect: any;

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

  onChangePayroll() {

    this.attService.getAttendance(this.nrSelect).subscribe(res => {
      this.attendanceList = res.Data;
      this.attendanceList.AttendanceDetailModels.forEach(element => {
        element.InOut = element.InOut.replace(/<b>/g, '').replace(/<\/b>/g, '').replace(/<br \/>/g, '');
      });

      //JAOWAT's Customise
      // this.attendanceList = this.attendanceList.slice().reverse().filter(e =>{
      //   if(e.InOut.match(/IN/) || (isStart && e.InOut.match(/[ Weekly Holiday ]/)))
      //   {
      //     isStart = true;
      //     return e;
      //   }
      // });
    });
  }
}