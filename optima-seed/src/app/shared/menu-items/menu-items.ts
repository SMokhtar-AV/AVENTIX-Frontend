import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS : Menu[] = [
  {
    state: 'home',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'employee',
    name: 'EMPLOYEE',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      {state: 'add', name: 'ADD'},
      {state: 'view', name: 'VIEW'}
    ]
  },
  {
    state: 'check',
    name: 'Check',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      {state: 'add', name: 'Add_CHECK'},
      {state: 'view', name: 'VIEW_CHECKS'}
    ]
  },




  {
    state: 'material',
    name: 'MATERIAL',
    type: 'sub',
    icon: 'equalizer' ,
    children: [
      {state: 'material/button', name: 'BUTTON'},
      {state: 'material/cards', name: 'CARDS'},
      {state: 'material/select', name: 'SELECT'},
      {state: 'material/chips', name: 'CHIPS'},
      {state: 'input', name: 'INPUT'},
      {state: 'material/checkbox', name: 'CHECKBOX'},
      {state: 'material/radio', name: 'RADIO'},
      {state: 'material/toolbar', name: 'TOOLBAR'},
      {state: 'lists', name: 'LISTS'},
      {state: 'material/grid', name: 'GRID'},
      {state: 'material/progress', name: 'PROGRESS'},
      {state: 'material/tabs', name: 'TABS'},
      {state: 'material/switch', name: 'SWITCH'},
      {state: 'material/tooltip', name: 'TOOLTIP'},
      {state: 'material/menu', name: 'MENU'},
      {state: 'material/slider', name: 'SLIDER'},
      {state: 'material/snackbar', name: 'SNACKBAR'},
      {state: 'material/dialog', name: 'DIALOG'}
    ]
    
  }
  ,
  {
    state: 'authentication',
    name: 'AUTHENTICATION',
    type: 'sub',  
    icon: 'security',
    children: [
      {state: 'login', name: 'LOGIN'},
      {state: 'register', name: 'REGISTER'},
      {state: 'forgot-password', name: 'FORGOT'},
      {state: 'lockscreen', name: 'LOCKSCREEN'}
    ]
  },
  {
    state: 'error',
    name: 'ERROR',
    type: 'sub',
    icon: 'error_outline',
    children: [
      {state: '404', name: '404'},
      {state: '503', name: '503'}
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
