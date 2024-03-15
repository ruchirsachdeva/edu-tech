import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent  implements OnInit {

     courses: any[] = [];
     quiz: any[] = []


  constructor(private courseService: CourseService) { }

  ngOnInit() {
        this.getCourses();
    this.getQuizQues();

  }

    getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => {this.courses = courses
        
        console.log(this.courses);}
        );
  }

  getQuizQues(): void {
    this.courseService.getQuizQues()
      .subscribe(quizes => {
        this.quiz = quizes

        console.log(this.quiz);
      }
      );
  }

}
