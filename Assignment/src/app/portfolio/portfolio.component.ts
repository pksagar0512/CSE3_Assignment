import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  template: `
    <div class="container mt-4">
      <h1>Our Portfolio</h1>
      <div class="portfolio-grid">
        <div class="portfolio-item">
          <h3>Project 1</h3>
          <p>A modern web application built with Angular.</p>
        </div>
        <div class="portfolio-item">
          <h3>Project 2</h3>
          <p>Mobile-responsive e-commerce platform.</p>
        </div>
        <div class="portfolio-item">
          <h3>Project 3</h3>
          <p>Custom CMS solution for content management.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .portfolio-item {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      transition: transform 0.3s ease;
    }
    .portfolio-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333;
      margin-bottom: 30px;
      text-align: center;
    }
    h3 {
      color: #444;
      margin-bottom: 15px;
    }
  `]
})
export class PortfolioComponent {}