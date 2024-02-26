import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'api/courses';  // URL to web api

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.coursesUrl);
  }

  getCourseById(id: string): Observable<any> {
  // Replace the URL with the actual endpoint to fetch a course by ID
  return this.http.get<any>(`${this.coursesUrl}/${id}`);
}
}
