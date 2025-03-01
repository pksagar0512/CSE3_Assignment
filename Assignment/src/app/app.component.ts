import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMenuOpen = false;
  searchQuery = '';
  isLoggedIn = false;

  ngOnInit() {
   
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  performSearch() {
    console.log('Search Query:', this.searchQuery);
  }

  logout() {
    localStorage.removeItem('isLoggedIn'); // Clear login status
    this.isLoggedIn = false;
    alert('You have been logged out!');
    location.reload(); // Refresh page to update UI
  }
}
