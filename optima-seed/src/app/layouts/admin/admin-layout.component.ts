import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { HorizontalMenuItems } from '../../shared/menu-items/horizontal-menu-items';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { PerfectScrollbarConfigInterface,
PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { KeycloakService } from 'keycloak-angular';
import { UsersService } from 'app/service/users.service';
@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  private _router: Subscription;

  today: number = Date.now();
  url: string;
  showSettings = false;
  dark: boolean;
  boxed: boolean;
  collapseSidebar: boolean;
  compactSidebar: boolean;
  horizontal: boolean = false;
  sidebarBg: boolean = true;
  currentLang = 'en';
  layoutDir = 'ltr';
  searchFocus : boolean = false;
  
  menuLayout           : any = 'vertical-menu';
  selectedSidebarImage : any = 'bg-1';
  selectedSidebarColor : any = 'sidebar-default';
  selectedHeaderColor  : any = 'header-default';
  collapsedClass       : any = 'side-panel-opened';
  selectedUser =
  {
    'id': '0',
    'createdTimestamp': 0,
    'username': '',
    'firstName': '',
    'lastName': '',
    'enabled': false,
    'totp': false,
    'emailVerified': false,
    'attributes': {
      'groupName': [], 'Company': [''], '': [''],
      'disableableCredentialTypes': [],
      'requiredActions': [],
      'notBefore': 0,
      'access': {
        'manageGroupMembership': false, 'view': false,
        'mapRoles': false,
        'impersonate': false, 'manage': false
      }
    }
  };
  fullName: string;

  @ViewChild('sidemenu', {static: true}) sidemenu;
  public config: PerfectScrollbarConfigInterface = {};

  constructor(private router: Router,  private keycloak: KeycloakService, public menuItems: MenuItems, public horizontalMenuItems : HorizontalMenuItems, public translate: TranslateService, private userservice: UsersService ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    console.log(this.keycloak.getKeycloakInstance().subject);
    this.viewUser(this.keycloak.getKeycloakInstance().subject);
    console.log(this.selectedUser+'ffffff');
    const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ');

    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac() && !this.compactSidebar && this.layoutDir != 'rtl') {
      const ps = new PerfectScrollbar(elemSidebar, {
                              wheelSpeed: 2,
                              suppressScrollX: true
                            });
    }

    this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.url = event.url;
      if (this.isOver()) {
        this.sidemenu.close();
      }

      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac() && !this.compactSidebar && this.layoutDir != 'rtl') {
        // Ps.update(elemContent);
      }
    });
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ');
    setTimeout(() => {
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac() && !this.compactSidebar && this.layoutDir != 'rtl') {
        const ps = new PerfectScrollbar(elemSidebar, {
                              wheelSpeed: 2,
                              suppressScrollX: true
                            });
      }
    }, 350);
  }

  ngOnDestroy() {
    this._router.unsubscribe();
  }
  viewUser(id): void {
    this.userservice.getUserById(id).subscribe(
      user => {
        this.selectedUser = user;
        console.log(this.selectedUser+'ffffff');
        this.fullName = this.selectedUser.firstName + " " + this.selectedUser.lastName;

      },
      error => {
        console.log(error);
      }, () => {
      });
  }
  isOver(): boolean {
    if (this.url === '/apps/messages' || this.url === '/apps/calendar' || this.url === '/apps/media' || this.url === '/maps/leaflet') {
      return true;
    } else {
      return window.matchMedia(`(max-width: 960px)`).matches;
    }
  }

  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  menuMouseOver(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'over';
    }
  }

  menuMouseOut(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
      this.sidemenu.mode = 'side';
    }
  }
  
  menuToggleFunc()
  {
    this.sidemenu.toggle();
    
    if(this.collapsedClass == 'side-panel-opened')
    {
        this.collapsedClass = 'side-panel-closed';
    }
    else
    {
        this.collapsedClass= 'side-panel-opened';
    }
  }

  changeMenuLayout(value)
  {
    console.log(value)
    if(value)
    {
      this.menuLayout = 'top-menu';
    }
    else
    {
      this.menuLayout = 'vertical-menu';
      this.menuToggleFunc();
    }
  }
  
  onSelectSidebarImage(selectedClass, event)
  {
    this.selectedSidebarImage = selectedClass;
  }
  
  onSelectedSidebarColor(selectedClass)
  {
    this.selectedSidebarColor = selectedClass;
  }
  
  onSelectedHeaderColor(selectedClass)
  {
    this.selectedHeaderColor = selectedClass;
  }

  isBgActive(value)
  {
    if(value == this.selectedSidebarImage)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  isSidebarActive(value)
  {
    if(value == this.selectedSidebarColor)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  isHeaderActive(value)
  {
    if(value == this.selectedHeaderColor)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  addMenuItem(): void {
    this.menuItems.add({
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'trending_flat',
      children: [
        {state: 'menu', name: 'MENU'},
        {state: 'timelmenuine', name: 'MENU'}
      ]
    });
  }

  logout(): void {
    console.log("i am here");
    this.keycloak.logout();
  }
}
