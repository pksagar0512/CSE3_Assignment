import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {
  constructor(private router: Router) {}

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.router.navigate(['/search'], { queryParams: { q: query } });
  }
}
