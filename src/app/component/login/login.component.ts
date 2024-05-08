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
  userForm!: FormGroup;
  //checkotp!:FormGroup;
  jwtToken: string | undefined;
  error: string | undefined;
  private interval: any; // Variable to store the interval reference
  private letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // String containing all uppercase letters


  constructor(private fb: FormBuilder,
    private loginservice: AuthService,
    private router: Router) { }



    ngOnInit(): void {
      this.userForm = this.fb.group({
        UserName: ['', Validators.required],
        Password: ['', Validators.required]
      });
    }

    setRole(role: string): void {
      sessionStorage.setItem('Role', role);
    }
    onSubmit(): void {
      if (this.userForm.valid) {
        const formData = this.userForm.value;
        this.loginservice.login(formData).subscribe(
          (response) => {
            const token = response.token;
            if (token) {
              const decodedToken = this.parseJwt(token);
              const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
              const userId = response.userId;
              this.loginservice.saveToken(token); // Save JWT token to localStorage
              this.loginservice.saveUserRole(role); // Save user role to localStorage
              this.loginservice.saveUserId(userId);

              // Redirect based on role
              if (role === 'Mentor') {
                this.router.navigate(['/dashboard',response.userId]);
                // Redirect to Mentor dashboard
              } else if (role === 'Employee') {

                this.router.navigate(['/employeedashboard',response.userId]); // Redirect to Employee dashboard
              } else if (role === 'Admin') {
                this.router.navigate(['/admindashboard',response.userId]); // Redirect to Admin dashboard
              }
            }
            this.error = undefined;
          },
          (error) => {
            if (error.error && error.error.message) {
              this.error = error.error.message;
            } else {
              this.error = "An error occurred while processing your request.";
            }
          }
        );
      }
    }

    parseJwt(token: string) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    }



    /*onSubmit(): void {
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
  }*/

  getRandomLetter(): string {
    const randomIndex = Math.floor(Math.random() * this.letters.length);
    return this.letters[randomIndex];
  }

  startAnimation(): void {
    let index = 0;
    const textLetters = document.querySelectorAll('#trackItText span');

    // Clear any previous interval
    clearInterval(this.interval);

    // Start animation
    this.interval = setInterval(() => {
      (textLetters[index] as HTMLElement).innerText = this.getRandomLetter();
      index = (index + 1) % textLetters.length;
    }, 100); // Adjust the timing as needed

    // Stop animation after 30 seconds and reset text to "TrackIt"
    setTimeout(() => {
      clearInterval(this.interval); // Stop the animation
      textLetters.forEach((letter, i) => {
        (letter as HTMLElement).innerText = "TrackIt"[i];
      });
    }, 5000); // 30 seconds in milliseconds
  }

}
