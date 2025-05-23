import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let platFormId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platFormId)) {
    if (!localStorage.getItem('authToken')) {
      return true;
    } else {
      router.navigate(['/home']);
      return false;
    }
  } else {
    return false;
  }
};
