import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { FinancialsPage } from './financials.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinancialsPage]
})
export class FinancialsPageModule {}
