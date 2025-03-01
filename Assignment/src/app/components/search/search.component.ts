import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common'; // ✅ Import CommonModule, NgIf, and NgFor
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule for [(ngModel)]

@Component({
  selector: 'app-search',
  standalone: true, // ✅ Standalone component
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [CommonModule, FormsModule, NgIf, NgFor] // ✅ Required for *ngIf, *ngFor, and [(ngModel)]
})
export class SearchComponent {
  query: string = '';
  results: string[] = [];

  search() {
    if (this.query.trim()) {
      // Simulating search results
      this.results = ['Result 1', 'Result 2', 'Result 3'].filter(item =>
        item.toLowerCase().includes(this.query.toLowerCase())
      );
    } else {
      this.results = [];
    }
  }
}
