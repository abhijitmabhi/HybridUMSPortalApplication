import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: './Pages/login/login.module#LoginPageModule',
  //   pathMatch: 'full'
  // },

  { path: '', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './Pages/home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './Pages/profile/student/profile.module#ProfilePageModule' },
  { path: 'logout', loadChildren: './Pages/login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
