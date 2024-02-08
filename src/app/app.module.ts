import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { TopHeaderComponent } from './components/common/top-header/top-header.component';
import { HomeBannerComponent } from './components/common/home-banner/home-banner.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FeaturedCoursesComponent } from './components/common/featured-courses/featured-courses.component';


@NgModule({
  declarations: [AppComponent,HomeComponent ,TopHeaderComponent, NavbarComponent,HomeBannerComponent, FeaturedCoursesComponent ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
