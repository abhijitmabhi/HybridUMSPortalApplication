import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationPage } from './registration.page';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
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
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    NgxContentLoadingModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
