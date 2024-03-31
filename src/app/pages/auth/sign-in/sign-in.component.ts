import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserAuthServiceService } from '../../../httpServices/userAuthService/user-auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from '../../../httpServices/api-service.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [UserAuthServiceService],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  userSignInForm: FormGroup;

  usernameControl: FormControl;
  passwordControl: FormControl;
  constructor(private userApiService: UserAuthServiceService) {
    this.usernameControl = new FormControl('', Validators.required);
    this.passwordControl = new FormControl('', Validators.required);
    this.userSignInForm = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl,
    });
  }
  onSubmitSignIn() {
    console.log(this.userSignInForm.value);
    console.log(this.userSignInForm);
    console.log(
      'dfg',
      this.userApiService.signInUser({
        username: this.userSignInForm.value.username,
        password: this.userSignInForm.value.password,
      })
    );
  }
}
