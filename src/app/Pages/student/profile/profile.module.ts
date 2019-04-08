import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

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
    MatDividerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
