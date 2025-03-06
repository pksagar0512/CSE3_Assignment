import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-search',
  template: `
    <div class="search-container">
      <input 
        type="text" 
        [(ngModel)]="searchTerm" 
        (input)="onSearch()"
        placeholder="Search..."
      />
      <button (click)="onSearch()">🔍</button>
    </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchTerm); // Emits string directly
  }
}