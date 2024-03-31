import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserAuthServiceService } from '../../../httpServices/userAuthService/user-auth-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [UserAuthServiceService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  userSignUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userApiService: UserAuthServiceService
  ) {
    this.userSignUpForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*W)(?!.* ).{8,16}$/'
        ),
      ]),
      passwordrepeat: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*W)(?!.* ).{8,16}$/'
        ),
      ]),
    });
  }
  onSubmitSignUp() {
    if (this.userSignUpForm.valid) {
      this.userApiService.signInUser({
        username: this.userSignUpForm.value.username,
        password: this.userSignUpForm.value.password,
      });
      console.log(this.userSignUpForm.value);
    }
  }
}
