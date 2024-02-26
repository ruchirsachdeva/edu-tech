import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.scss'],
})
export class EnrolledCoursesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

     currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
