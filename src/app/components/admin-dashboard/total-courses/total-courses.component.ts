import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-courses',
  templateUrl: './total-courses.component.html',
  styleUrls: ['./total-courses.component.scss'],
})
export class TotalCoursesComponent  implements OnInit {

  totalCourses = [
    {
      id: 1,
      imageUrl: 'assets/images/courses/course-1.jpg',
      level: 'All Levels',
      price: '$25.00',
      courseName: 'Complete',
      totalHours: '7 Total hours',
      students: 2,
      rating: 5,
      reviews: 15,
      authorName: 'Sullivan',
      authorImage: 'assets/images/courses/user-1.jpg'
    },

    {
      id: 2,
      imageUrl: 'assets/images/courses/course-1.jpg',
      level: 'All Levels',
      price: '$35.00',
      courseName: ' Guideline From Zero To Hero',
      totalHours: '7 Total hours',
      students: 4,
      rating: 5,
      reviews: 15,
      authorName: 'Sullivan',
      authorImage: 'assets/images/courses/user-1.jpg'
    },

    {
      id: 3,
      imageUrl: 'assets/images/courses/course-1.jpg',
      level: 'All Levels',
      price: '$45.00',
      courseName: 'To Hero In Web Development',
      totalHours: '7 Total hours',
      students: 6,
      rating: 5,
      reviews: 15,
      authorName: 'Sullivan',
      authorImage: 'assets/images/courses/user-1.jpg'
    },

    {
      id: 4,
      imageUrl: 'assets/images/courses/course-1.jpg',
      level: 'All Levels',
      price: '$55.00',
      courseName: 'Complete Guideline',
      totalHours: '7 Total hours',
      students: 8,
      rating: 5,
      reviews: 15,
      authorName: 'Sullivan',
      authorImage: 'assets/images/courses/user-1.jpg'
    },

    {
      id: 5,
      imageUrl: 'assets/images/courses/course-1.jpg',
      level: 'All Levels',
      price: '$65.00',
      courseName: 'From Zero To',
      totalHours: '7 Total hours',
      students: 10,
      rating: 5,
      reviews: 15,
      authorName: 'Sullivan',
      authorImage: 'assets/images/courses/user-1.jpg'
    },

  ];
  constructor() { }

  ngOnInit() {}

}
