import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Dashboard, Semester } from './HomeModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {
  public isCollapsed = false;
  activeId = ['static-1', 'static-2'];

  dashboard: Dashboard;
  a:any;
  RegistrationHideFlag  = true;
  ScheduleHideFlag = true;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

    this.menuCtrl.enable(true);

    this.dashboard  = 
        {
            UserID : '14-25773-1',
            Semesters : [
                {
                  ID: 1,
                  Title:"2013-2014, Spring"
                },
                {
                  ID: 2,
                  Title:"2013-2014, Summer"
                }
            ],
            Courses :[
                {
                    ID:'01488',
                    Grade:'A-',
                    Marks:86.00,
                    Section:'B3',
                    Status:'Valid',
                    Title:'English Reading Skills & Public Speaking',
                    SemesterID:'1'
                },
                {
                    ID:'01490',
                    Grade:'A-',
                    Marks:86.00,
                    Section:'B3',
                    Status:'Valid',
                    Title:'Physics 1',
                    SemesterID:'1'
                },
                {
                  ID:'00069',
                  Grade:'A-',
                  Marks:86.00,
                  Section:'B3',
                  Status:'Valid',
                  Title:'Programmign Language 1',
                  SemesterID:'2'
              },
            ]
        };
    

    console.log(this.dashboard);


  }
 
}
