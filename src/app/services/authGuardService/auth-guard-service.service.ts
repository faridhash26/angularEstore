import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardServiceService {
  constructor(private router: Router) {}
  canAcTivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.checkLoggedIn()) {
      return true;
    } else {
      this.router.navigate([this.getLoginUrl()]);
      return false;
    }
  }
  checkLoggedIn() {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      return true;
    } else {
      return false;
    }
  }
  getLoginUrl() {
    return '/signIn';
  }
}
