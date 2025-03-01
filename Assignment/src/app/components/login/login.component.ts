import { Component } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';  // ✅ Import CommonModule & NgIf
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule for ngModel

@Component({
  selector: 'app-login',
  standalone: true,  // ✅ Standalone component
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, NgIf]  // ✅ Required for *ngIf and [(ngModel)]
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  login() {
    console.log('Logging in with', this.loginData);
  }
}
