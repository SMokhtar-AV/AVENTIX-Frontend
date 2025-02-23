import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(protected router: Router, protected service: KeycloakService) {
    super(router, service)
  }

  isAccessAllowed(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Promise<boolean> {
    return new Promise((resolve, reject) => {
      const userRoles: string[] = this.service.getUserRoles();
       });
    }
}
