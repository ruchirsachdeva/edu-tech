import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent  implements OnInit {

    course: any;


  constructor(  private courseService: CourseService,
    private route: ActivatedRoute) { }

  ngOnInit() {
       this.route.paramMap.pipe(
      switchMap(params => {
        const courseId = params.get('id')!;
        return this.courseService.getCourseById(courseId);
      })
    ).subscribe(course => {
      this.course = course;
      console.log(this.course);
      // Now you can use this.course in your template to display the course details
    });
  }



    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
