import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

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




@NgModule({
  declarations: [AppComponent,HomeComponent, NavbarComponent,FooterComponent,HomeBannerComponent, FeaturedCoursesComponent, AboutSectionComponent, TestimonialsComponent, AccreditationsComponent, CoursesComponent, LoginComponent, RegisterComponent, DashboardComponent, CourseItemComponent, EnrolledCoursesComponent, MyProfileComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
