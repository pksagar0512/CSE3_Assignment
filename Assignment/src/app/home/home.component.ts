import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container mt-4">
      <h1>Welcome to Our Website</h1>
      <p>This is the home page of our Angular application.</p>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
  `]
})
export class HomeComponent {}