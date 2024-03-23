import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent  implements OnInit {

  courseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      title: [''],
      description: [''],
      duration: [''],
      eligibility: [''],
      learningObjectives: [''],
      credits: [''],
      startDate: [''],
      curriculum: [''],
      fee: [''],
      coordinators: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.courseForm.value);
    this.resetForm();
  }

  resetForm(): void {
    this.courseForm.reset();
  }

}
