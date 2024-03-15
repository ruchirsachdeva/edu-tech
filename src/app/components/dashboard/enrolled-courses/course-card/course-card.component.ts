import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  @Input() id!: number;
  @Input() price!: string;
  @Input() courseName!: string;

}
