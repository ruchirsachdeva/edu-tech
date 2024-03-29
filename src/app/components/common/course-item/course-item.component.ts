import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent  implements OnInit {
 

  constructor() {

   }

  ngOnInit() {
    
  }

  @Input() id!: number;
  @Input() imageUrl!: string;
  @Input() level!: string;
  @Input() price!: string;
  @Input() courseName!: string;
  @Input() totalHours!: string;
  @Input() students!: number;
  @Input() rating!: number;
  @Input() reviews!: number;
  @Input() authorName!: string;
  @Input() authorImage!: string;

}
