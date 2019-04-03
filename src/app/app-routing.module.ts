import { LogoutPage } from './Pages/logout/logout.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: './Pages/login/login.module#LoginPageModule',
    pathMatch: 'full'
  },

  { path: '', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './Pages/student/home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './Pages/student/profile/profile.module#ProfilePageModule' },
  // { path: 'logout', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'courses-results', loadChildren: './Pages/student/courses-results/courses-results.module#CoursesResultsPageModule' },
  { path: 'profile', loadChildren: './Pages/employee/profile/profile.module#ProfilePageModule' },
  { path: 'logout', loadChildren: './Pages/logout/logout.module#LogoutPageModule' }
  // { path: 'logout', component: LogoutPage }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
