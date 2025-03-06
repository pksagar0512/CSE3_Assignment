import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// login.component.ts
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Add CommonModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  // Declare fb first
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Initialize form after dependencies
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      this.router.navigate(['/dashboard']);
    }
  }
}