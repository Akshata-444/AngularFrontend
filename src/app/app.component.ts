import { Component } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang16';

  constructor(private router:Router){}
  isLoggedIn(): boolean {
    // Check if the user is logged in based on your authentication logic
    return !!localStorage.getItem('auth_token');
     // Assuming you set a token upon login
  }

  logout(): void {
    // Clear the token from local storage or perform any other logout actions
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');

    this.router.navigate(['/login']); // Redirect to the login page after logout
  }

}

