import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [NgIf, NgFor]
})
export class SearchComponent {
  query: string = '';
  results: string[] = [];

  onSearch(event: Event) {
    this.query = (event.target as HTMLInputElement).value;

    if (this.query.trim() === '') {
      this.results = [];
      return;
    }

    // Simulating search results
    this.results = [
      `Result 1 for "${this.query}"`,
      `Result 2 for "${this.query}"`,
      `Result 3 for "${this.query}"`,
    ];
  }
}
