import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { IonicModule } from '@ionic/angular';

import { EmployeeProfilePage } from './employee-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    NgxContentLoadingModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeProfilePage]
})
export class EmployeeProfilePageModule {}
