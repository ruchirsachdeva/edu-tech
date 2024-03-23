import { Component, OnInit } from '@angular/core';

interface Assignment {
  id: number;
  title: string;
  description: string;
  deadline: string;
}

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class AssignmentsComponent  implements OnInit {

  assignments: Assignment[] = [
    // Example assignment
    { id: 1, title: 'Assignment 1', description: 'Description of Assignment 1', deadline: '2023-05-01' }
  ];

  // New Assignment Model
  newAssignment: Assignment = {
    id: 0,
    title: '',
    description: '',
    deadline: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  addAssignment(): void {
    // Adding a new assignment
    this.newAssignment.id = this.assignments.length + 1;
    this.assignments.push({ ...this.newAssignment });

    // Reset the form
    this.newAssignment = { id: 0, title: '', description: '', deadline: '' };
  }

}
