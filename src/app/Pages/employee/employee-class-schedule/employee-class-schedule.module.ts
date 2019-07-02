import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeeClassSchedulePage } from './employee-class-schedule.page';
import { MaterialModule } from 'src/app/Core/modules/material.module';

const routes: Routes = [
  {
    path: '',
    component: EmployeeClassSchedulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeClassSchedulePage]
})
export class EmployeeClassSchedulePageModule {}
