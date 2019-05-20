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
  { path: 'registration', loadChildren: './Pages/student/registration/registration.module#RegistrationPageModule' },
  { path: 'financials', loadChildren: './Pages/student/financials/financials.module#FinancialsPageModule' },
  { path: 'grades', loadChildren: './Pages/student/grades/grades.module#GradesPageModule' },
  { path: 'offered-courses', loadChildren: './Pages/student/offered-courses/offered-courses.module#OfferedCoursesPageModule' },
  
  //EMPLOYEE
  { path: 'employee-home', loadChildren: './Pages/employee/employee-home/employee-home.module#EmployeeHomePageModule' },
  { path: 'employee-profile', loadChildren: './Pages/employee/employee-profile/employee-profile.module#EmployeeProfilePageModule' },
  { path: 'error-landing', loadChildren: './Core/errorLandingPage/error-landing/error-landing.module#ErrorLandingPageModule' },
  { path: 'employee-attendance', loadChildren: './Pages/employee/employee-attendance/employee-attendance.module#EmployeeAttendancePageModule' }

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouterExtServiceService]
})
export class AppRoutingModule { }
