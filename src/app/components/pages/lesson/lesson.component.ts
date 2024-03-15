import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent  implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

    courses = [
    {
      title: 'Welcome Histudy',
      lessons: [
        { name: 'Course Intro', duration: '30 min', completed: true, href: '/lesson' },
        { name: 'Introduction', duration: '15 min', completed: false, href: '/lesson/lesson-intro' }
      ],
      show: false
    },
    {
      title: 'Quiz',
      lessons: [
        { name: 'Quiz Start', duration: '10 min', completed: true, href: '/lesson/quiz' },

      ],
      show: false
    },
    // Add more course sections as needed
  ];

  toggleSection(index: number) {
    // Toggle the 'show' property to expand or collapse the section
    this.courses[index].show = !this.courses[index].show;
  }

}
