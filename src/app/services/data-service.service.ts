import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() { }

    private enrolledCoursesSource = new BehaviorSubject<any[]>([]);
    enrolledCourses$ = this.enrolledCoursesSource.asObservable();

    private activeCoursesSource = new BehaviorSubject<any[]>([]);
    activeCourses$ = this.activeCoursesSource.asObservable();

    private completedCoursesSource = new BehaviorSubject<any[]>([]);
    completedCourses$ = this.completedCoursesSource.asObservable();

    setEnrolledCourses(courses: any[]) {
        this.enrolledCoursesSource.next(courses);
    }

    setActiveCourses(courses: any[]) {
        this.activeCoursesSource.next(courses);
    }

    setCompletedCourses(courses: any[]) {
        this.completedCoursesSource.next(courses);
    }

    // Methods to get course IDs
    getEnrolledCoursesIds(): string[] {
        return this.enrolledCoursesSource.value.map(course => course.courseId);
    }

    getActiveCoursesIds(): string[] {
        return this.activeCoursesSource.value.map(course => course.courseId);
    }

    getCompletedCoursesIds(): string[] {
        return this.completedCoursesSource.value.map(course => course.courseId);
    }

 
}
