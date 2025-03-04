import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container mt-4">
      <h1>About Us</h1>
      <div class="content">
        <p>We are a passionate team dedicated to creating innovative solutions.</p>
        <p>Our mission is to deliver high-quality products that make a difference.</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .content {
      max-width: 800px;
      line-height: 1.6;
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
  `]
})
export class AboutComponent {}