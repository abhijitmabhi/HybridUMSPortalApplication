import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterExtServiceService } from './Core/extra_router/router-ext-service.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: './Pages/login/login.module#LoginPageModule',
    pathMatch: 'full'
  },

  { path: '', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'logout', loadChildren: './Pages/logout/logout.module#LogoutPageModule' },


  //STUDENT
  { path: 'home', loadChildren: './Pages/student/home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './Pages/student/profile/profile.module#ProfilePageModule' },
  { path: 'courses-results', loadChildren: './Pages/student/courses-results/courses-results.module#CoursesResultsPageModule' },


  //EMPLOYEE
  { path: 'employee-home', loadChildren: './Pages/employee/employee-home/employee-home.module#EmployeeHomePageModule' },
  { path: 'employee-profile', loadChildren: './Pages/employee/profile/profile.module#ProfilePageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouterExtServiceService]
})
export class AppRoutingModule { }
