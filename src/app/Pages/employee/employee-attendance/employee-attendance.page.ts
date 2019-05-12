import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { EmployeeAttendanceService } from 'src/app/Services/employee/employee-attendance.service';

export interface SelectMonth {
  value: any;
  viewValue: any;
}

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.page.html',
  styleUrls: ['./employee-attendance.page.scss'],
})
export class EmployeeAttendancePage implements OnInit {

  // step = 0;

  constructor(public attService: EmployeeAttendanceService) { }

  months: SelectMonth[] = [
    {value: 'May, 2019', viewValue: 'May, 2019'},
    {value: 'April, 2019', viewValue: 'April, 2019'},
    {value: 'March, 2019', viewValue: 'March, 2019'},
    {value: 'February, 2019', viewValue: 'February, 2019'},
    {value: 'January, 2019', viewValue: 'January, 2019'}
  ];

  payrollList = [];
  attendanceList:any;
  nrSelect:any;

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  // prevStep() {
  //   this.step--;
  // }

  ngOnInit() {
    this.getPayroll();
  }

  getPayroll(){
    this.attService.getPayroll().subscribe(res=>{
      this.generatePayrollDropdown(res.Data);
      // this.attService.getAttendance(this.payrolls)
  });
  }

  generatePayrollDropdown(payrolls){

    payrolls.forEach(payroll => {
      let year = payroll.PayrollYear;
      let split = payroll.PayMonth.split(" ");
      let month = split[0];

      this.payrollList.push({
          Name:`${year},${month}`,
          Value:payroll.ID
      }); 
    });
    this.payrollList = this.payrollList.slice().reverse();
    this.nrSelect = this.payrollList[0].Value;
  }

  onChangePayroll(){

    let isStart = false;

    this.attService.getAttendance(this.nrSelect).subscribe(res=>{

      this.attendanceList = res.Data.AttendanceDetailModels;
      this.attendanceList.forEach(element => {
        element.InOut = element.InOut.replace(/<b>/g,'').replace(/<\/b>/g,'').replace(/<br \/>/g,'');
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