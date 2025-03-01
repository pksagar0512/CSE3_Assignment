import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Ensure CommonModule is imported
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  login() {
    if (this.email === 'shreyaitkapalle@gmail.com' && this.password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login Successful!');
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
