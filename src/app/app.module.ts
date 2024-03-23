import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-courses.service';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FeaturedCoursesComponent } from './components/pages/home/featured-courses/featured-courses.component';
import { AboutSectionComponent } from './components/pages/home/about-section/about-section.component';
import { HomeBannerComponent } from './components/pages/home/home-banner/home-banner.component';
import { TestimonialsComponent } from './components/pages/home/testimonials/testimonials.component';
import { AccreditationsComponent } from './components/pages/home/accreditations/accreditations.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseItemComponent } from './components/common/course-item/course-item.component';
import { EnrolledCoursesComponent } from './components/dashboard/enrolled-courses/enrolled-courses.component';
import { MyProfileComponent } from './components/dashboard/my-profile/my-profile.component';
import { CourseDetailsComponent } from './components/pages/course-details/course-details.component';
import { QuizAttemptsComponent } from './components/dashboard/quiz-attempts/quiz-attempts.component';
import { QuizComponentComponent } from './components/contentItems/quiz-component/quiz-component.component';
import { VideoComponentComponent } from './components/contentItems/video-component/video-component.component';
import { LessonComponent } from './components/pages/lesson/lesson.component';
import { CourseContentComponent } from './components/pages/course-content/course-content.component';
import { LessonIntroComponent } from './components/contentItems/lesson-intro/lesson-intro.component';
import { CourseCardComponent } from './components/dashboard/enrolled-courses/course-card/course-card.component';
import { InstructorDashboardComponent } from './components/instructor-dashboard/instructor-dashboard.component';
import { PublishedCoursesComponent } from './components/instructor-dashboard/published-courses/published-courses.component';
import { AddCourseComponent } from './components/instructor-dashboard/add-course/add-course.component';
import { AssignmentsComponent } from './components/instructor-dashboard/assignments/assignments.component';





@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, FooterComponent, HomeBannerComponent, FeaturedCoursesComponent, AboutSectionComponent, TestimonialsComponent, AccreditationsComponent, CoursesComponent, LoginComponent, RegisterComponent, DashboardComponent, CourseItemComponent, EnrolledCoursesComponent, MyProfileComponent, CourseDetailsComponent, QuizAttemptsComponent, QuizComponentComponent, VideoComponentComponent, LessonComponent, CourseContentComponent, LessonIntroComponent, CourseCardComponent, InstructorDashboardComponent, PublishedCoursesComponent, AddCourseComponent, AssignmentsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,ReactiveFormsModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
