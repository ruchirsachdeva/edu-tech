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
import { LessonComponent } from './components/pages/lesson/lesson.component';
import { CourseContentComponent } from './components/pages/course-content/course-content.component';
import { QuizComponentComponent } from './components/contentItems/quiz-component/quiz-component.component';
import { LessonIntroComponent } from './components/contentItems/lesson-intro/lesson-intro.component';
import { InstructorDashboardComponent } from './components/instructor-dashboard/instructor-dashboard.component';
import { PublishedCoursesComponent } from './components/instructor-dashboard/published-courses/published-courses.component';
import { AddCourseComponent } from './components/instructor-dashboard/add-course/add-course.component';
import { AssignmentsComponent } from './components/instructor-dashboard/assignments/assignments.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TotalCoursesComponent } from './components/admin-dashboard/total-courses/total-courses.component';
import { EnrolledStudentsComponent } from './components/admin-dashboard/enrolled-students/enrolled-students.component';
import { RegisteredInstructorsComponent } from './components/admin-dashboard/registered-instructors/registered-instructors.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'courses',
    component: CoursesComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'course-details/:id',
    component: CourseDetailsComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'enrolled-courses',
        component: EnrolledCoursesComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent
      },
      {
        path: 'my-quiz-attempts',
        component: QuizAttemptsComponent
      },
    ]
  },

  {
    path: 'instructor-dashboard',
    component: InstructorDashboardComponent,
    children: [
      {
        path: 'published-courses',
        component: PublishedCoursesComponent
      }, {
        path: 'add-course',
        component: AddCourseComponent
      },
      {
        path: 'assignments',
        component: AssignmentsComponent
      },

    ]
  }
  ,

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'total-courses',
        component: TotalCoursesComponent
      }, {
        path: 'enrolled-students',
        component: EnrolledStudentsComponent
      }, {
        path: 'registered-instructors',
        component: RegisteredInstructorsComponent
      }

    ]
  }
  ,

  {
    path: 'course-content',
    component: CourseContentComponent,
  },
  {
    path: 'lesson',
    component: LessonComponent, children: [
      {
        path: 'quiz',
        component: QuizComponentComponent
      },
      {
        path: 'lesson-intro',
        component: LessonIntroComponent
      },

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
