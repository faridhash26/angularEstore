import { CanActivateFn } from '@angular/router';
import { AuthGuardServiceService } from '../../services/authGuardService/auth-guard-service.service';
import { inject } from '@angular/core';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuardServiceService).canAcTivate(route, state);
};
