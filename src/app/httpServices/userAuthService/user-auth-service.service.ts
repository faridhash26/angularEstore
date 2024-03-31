import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface IUserData {
  username: string;
  password: string;
}
interface ISignInUserData {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserAuthServiceService extends ApiServiceService {
  constructor(http: HttpClient, private router: Router) {
    super(http);
  }

  signInUser(payload: IUserData) {
    return this.post<ISignInUserData>('signIn', payload).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
        return response;
      },
    });
  }
  signUpUser(payload: IUserData) {
    return this.post('signUp', payload).subscribe({
      next: (response) => {
        this.router.navigate(['/']);
        return response;
      },
      error(err) {
        console.log('error', err);
      },
    });
  }
}
