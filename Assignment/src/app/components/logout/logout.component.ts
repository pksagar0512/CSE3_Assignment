import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.logout();
  }

  logout() {
    // Clear session storage or local storage if using authentication
    localStorage.removeItem('user');
    sessionStorage.clear();

    // Redirect after 3 seconds
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
