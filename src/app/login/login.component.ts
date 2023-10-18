import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { ValidationErrorMessage } from '../helpers/cutom.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userFormGroup!:FormGroup;
errorMessage: any;
  constructor(private fb:FormBuilder,
    private authenticationService:AuthenticationService,
    public validationError:ValidationErrorMessage,
    private router: Router) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      username:this.fb.control("",[Validators.required]),
      password:this.fb.control("",[Validators.required,Validators.minLength(4)])
    });
  }

  handleLogin(){
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;
    this.authenticationService.login(username,password).subscribe({
      next: (user) =>{
        this.authenticationService.authenticateUser(user).subscribe({
          next: (data) => {
            this.router.navigateByUrl('/admin');
          }
      });
      },
      error: (err) =>{
       this.errorMessage=err;
      }
    });
  }

}
