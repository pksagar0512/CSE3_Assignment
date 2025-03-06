import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  isLoggedIn = true;
  userName = 'John Doe';
  showUserMenu = false;

  // Toggle methods
  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }
  toggleUserMenu() { this.showUserMenu = !this.showUserMenu; }

  // Search handler
  handleSearch(searchTerm: string) {
    console.log('Search term:', searchTerm);
  }

  // Temporary logout
  logout() { console.log('Logout clicked'); }
}