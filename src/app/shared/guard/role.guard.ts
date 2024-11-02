import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { currentUser } from '@shared/utils/current-user';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const user = currentUser();
    // switch (user?.menu_id) {
    //   case 1:
        this.router.navigate(['dashboard/principle-dashboard']);
      //   break
      // default:
      //   this.router.navigate(['dashboard/agent-dashboard']);
      //   break
    // }
    return false;
  }
}
