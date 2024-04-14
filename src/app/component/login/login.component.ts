import { Component , OnInit} from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Role } from 'src/app/Models/user';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  user: LoginModel = {
    UserName: '',
    Password: ''
  };
  error: string | null = null;


  constructor(private fb: FormBuilder,
    private loginservice: AuthService,
    private router: Router) { }

    onSubmit(): void {
      this.loginservice.login(this.user).subscribe(
        (response) => {
          // Handle successful login response
          console.log(response);
          if (response && response.token) {
            // Parse the JWT token to extract role
            const decodedToken = this.parseJwt(response.token);
            const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            console.log('Role:', role);
            if (role === 'Admin') {
              this.router.navigate(['/admindashboard']);
            } else if (role === 'Mentor') {
              this.router.navigate(['/dashboard']);
            } else if (role === 'Employee') {
              this.router.navigate(['/employeedashboard']);
            } else {
              console.log('Unknown role:', role);
              // Handle unknown role
            }
          }
        },
        (error) => {
          // Handle error
          this.error = error;
        }
      );
    }

    // Function to parse JWT token
    parseJwt(token: string) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    }
  }
