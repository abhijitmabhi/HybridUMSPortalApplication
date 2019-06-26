import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule} from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EmployeeAttendancePage } from './employee-attendance.page';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxContentLoadingModule } from 'ngx-content-loading';

const routes: Routes = [
  {
    path: '',
    component: EmployeeAttendancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    NgxContentLoadingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeAttendancePage]
})
export class EmployeeAttendancePageModule {}
