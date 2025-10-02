import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const notAuthGuard: CanActivateFn = (route, state) => {

  if (!inject(AuthService).isLoggeIn()) {
    return true
  }
  inject(Router).navigate(['/home/home'])
  return false

};
