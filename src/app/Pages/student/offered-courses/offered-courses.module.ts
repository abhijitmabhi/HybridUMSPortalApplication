import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {MatTableModule} from '@angular/material/table';
import { OfferedCoursesPage } from './offered-courses.page';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxContentLoadingModule } from 'ngx-content-loading';

const routes: Routes = [
  {
    path: '',
    component: OfferedCoursesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    NgxContentLoadingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OfferedCoursesPage]
})
export class OfferedCoursesPageModule {}
