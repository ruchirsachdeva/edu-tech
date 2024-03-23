import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  isInstructor: boolean = false;

  constructor(private router: Router) { }

  login() {
    // Conditional redirection based on the value of isInstructor
    if (this.isInstructor) {
      this.router.navigate(['/instructor-dashboard']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

}
