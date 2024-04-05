import { Component , OnInit} from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Role } from 'src/app/Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  //checkotp!:FormGroup;
  jwtToken: string | undefined;
  error: string | undefined;
  //isPasswordRequired: boolean = false; // Add this line
  //otpResponse!: string;

  constructor(private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });

  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.authservice.login(formData).subscribe(
        (response) => {
          this.jwtToken = "Logged in sucessfully";
          var User=this.authservice.getcurrentUser();
          if(User&&User.Role==1){
            this.jwtToken="IT IS A MENTOR";
            this.router.navigate(['/Mentor_dashboard']);
          }
          else{
            this.jwtToken="IT IS Not a Mentor";
            this.router.navigate(['/dashboard']);
          }

          this.error = undefined;
          //this.router.navigate(['/GetTransactions']);

        },
        (error) => {
          this.error = error.error.message;
          this.jwtToken = undefined;
        }
      );
    }
  }
}
