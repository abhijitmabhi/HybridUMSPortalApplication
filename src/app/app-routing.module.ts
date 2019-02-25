import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: './Pages/login/login.module#LoginPageModule',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   loadChildren: './home/home.module#HomePageModule'
  // },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
