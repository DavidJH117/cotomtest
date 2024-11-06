import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  onSubmit() {
    if (this.username === 'jose' && this.password === 'mipassword') {
      this.message = 'Login successful!';
    } else {
      this.message = 'Invalid username or password.';
    }
  }
}
