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

    const quizQue: any = {
      "timeLimit": 900, // 15 minutes in seconds
      "questions": [
        {
          "id": 1,
          "question": "What is your name?",
          "options": ["a", "b", "c", "d"]
        },
        {
          "id": 2,
          "question": "What is your age?",
          "options": ["a", "b", "c", "d"]
        },
        {
          "id": 3,
          "question": "What is your height?",
          "options": ["a", "b", "c", "d"]
        },
        {
          "id": 4,
          "question": "What is your weight?",
          "options": ["a", "b", "c", "d"]
        }
      ]
    };

    const users = [
      {
        id: 1,
        enrolled: [
          {
            courseId: 1,
            status: 'active'
          },
          {
            courseId: 2,
            status: 'active'
          },
          {
            courseId: 3,
            status: 'completed'
          },
          {
            courseId: 4,
            status: 'completed'
          }
        ]
      }
    ]
    return { courses, quizQue, users };
  }


}
