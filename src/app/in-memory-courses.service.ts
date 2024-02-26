import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses = [
      {
        id: 1,
        imageUrl: 'assets/images/courses/course-1.jpg',
        level: 'All Levels',
        price: '$25.00',
        courseName: 'Complete Guideline From Zero To Hero In Web Development',
        totalHours: '7 Total hours',
        students: 12,
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
        courseName: 'Complete Guideline From Zero To Hero In Web Development',
        totalHours: '7 Total hours',
        students: 12,
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
        courseName: 'Complete Guideline From Zero To Hero In Web Development',
        totalHours: '7 Total hours',
        students: 12,
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
        courseName: 'Complete Guideline From Zero To Hero In Web Development',
        totalHours: '7 Total hours',
        students: 12,
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
        courseName: 'Complete Guideline From Zero To Hero In Web Development',
        totalHours: '7 Total hours',
        students: 12,
        rating: 5,
        reviews: 15,
        authorName: 'Sullivan',
        authorImage: 'assets/images/courses/user-1.jpg'
      },


      // Add at least 4 more course objects here
    ];
    return {courses};
  }


}
