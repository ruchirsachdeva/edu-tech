import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent  implements OnInit {

     courses: any[] = [];


  constructor(private courseService: CourseService) { }

  ngOnInit() {
        this.getCourses();

  }

    getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => {this.courses = courses
        
        console.log(this.courses);}
        );
  }

}
