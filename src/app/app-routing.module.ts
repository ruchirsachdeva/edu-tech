import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnrolledCoursesComponent } from './components/dashboard/enrolled-courses/enrolled-courses.component';
import { MyProfileComponent } from './components/dashboard/my-profile/my-profile.component';
import { CourseDetailsComponent } from './components/pages/course-details/course-details.component';
import { QuizAttemptsComponent } from './components/dashboard/quiz-attempts/quiz-attempts.component';

const routes: Routes = [
  {
    path: '',
  component: HomeComponent
  },

  {path: 'courses',
component: CoursesComponent},

  {path: 'login',
component: LoginComponent},
{  path: 'register',
component: RegisterComponent},

{  path: 'course-details/:id',
component: CourseDetailsComponent},

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {  path: 'enrolled-courses',
component: EnrolledCoursesComponent},
    {  path: 'my-profile',
component: MyProfileComponent},
    {  path: 'my-quiz-attempts',
component: QuizAttemptsComponent},
    ]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
