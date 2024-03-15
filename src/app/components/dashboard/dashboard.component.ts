import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { DataService } from 'src/app/services/data-service.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  user: any;

  enrolledCourses: any[] = []
  activeCourses: any[] = []
  completedCourses: any[] = []


  constructor(public router: Router,
    private courseService: CourseService,
    private dataService: DataService,

  ) { }

  ngOnInit(): void {
    this.courseService.getUserById('1')
      .subscribe(data => {
        this.user = data
        this.dataService.setEnrolledCourses(this.user.enrolled)
        this.dataService.setActiveCourses(this.user.enrolled.filter((course: any) => course.status === 'active'))
        this.dataService.setCompletedCourses(this.user.enrolled.filter((course: any) => course.status === 'completed'))

        this.dataService.enrolledCourses$.subscribe(courses => {
          this.enrolledCourses = courses;
        });

        this.dataService.activeCourses$.subscribe(courses => {
          this.activeCourses = courses;
        });

        this.dataService.completedCourses$.subscribe(courses => {
          this.completedCourses = courses;
        });


      }
      );

  }






}
