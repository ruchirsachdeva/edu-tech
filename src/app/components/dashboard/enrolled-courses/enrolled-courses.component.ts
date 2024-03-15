import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { DataService } from 'src/app/services/data-service.service';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.scss'],
})
export class EnrolledCoursesComponent implements OnInit {

  enrolledCourses: any[] = []
  activeCourses: any[] = []
  completedCourses: any[] = []

  constructor(private dataService: DataService, private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.fetchCourses();
    console.log(this.enrolledCourses);
  }

  fetchCourses() {
    // Directly use the data from DataService
    this.fetchCoursesByCategory(this.dataService.getEnrolledCoursesIds()).subscribe(courses => {
      this.enrolledCourses = courses;
    });

    this.fetchCoursesByCategory(this.dataService.getActiveCoursesIds()).subscribe(courses => {
      this.activeCourses = courses;
    });

    this.fetchCoursesByCategory(this.dataService.getCompletedCoursesIds()).subscribe(courses => {
      this.completedCourses = courses;
    });
  }

  fetchCoursesByCategory(courseIds: string[]): Observable<any[]> {
    if (!courseIds.length) {
      return of([]); // Return an observable of an empty array if there are no course IDs
    }
    const observables = courseIds.map(id => this.courseService.getCourseById(id));
    return forkJoin(observables); // Execute all HTTP requests in parallel
  }

  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }

}
