import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { GradesPage } from './grades.page';

const routes: Routes = [
  {
    path: '',
    component: GradesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GradesPage]
})
export class GradesPageModule {}
