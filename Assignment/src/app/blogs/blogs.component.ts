import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  template: `
    <div class="container mt-4">
      <h1>Our Blog Posts</h1>
      <div class="blog-list">
        <article class="blog-post">
          <h2>Latest Technologies</h2>
          <p>Exploring the cutting-edge developments in tech world.</p>
        </article>
        <article class="blog-post">
          <h2>Web Development Trends</h2>
          <p>Stay updated with the latest web development practices.</p>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .blog-list {
      max-width: 800px;
      margin: 0 auto;
    }
    .blog-post {
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    h1 {
      color: #333;
      margin-bottom: 30px;
    }
    h2 {
      color: #444;
      margin-bottom: 15px;
    }
  `]
})
export class BlogsComponent {}