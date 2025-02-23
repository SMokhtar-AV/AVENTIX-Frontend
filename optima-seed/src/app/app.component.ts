import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService} from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent  implements OnInit{
  title = 'pet-store';
  roles: string[];
  username: string;
   constructor(public translate: TranslateService, private router:Router,private keycloak: KeycloakService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }

  ngOnInit() {
    this.roles = this.keycloak.getUserRoles();
    this.keycloak.loadUserProfile().then(profile => {
      this.username = `${profile.firstName} ${profile.lastName}`;
    });
  }
  logout(): void {
    this.keycloak.logout();
  }
}
