import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatListModule,
    MatCardModule,
    NgxContentLoadingModule,
    MatGridListModule,
    RouterModule.forChild(routes),
    MatDialogModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
