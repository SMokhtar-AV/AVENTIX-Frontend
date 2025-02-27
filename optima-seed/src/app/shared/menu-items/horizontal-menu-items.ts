import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  subchildren? : SuperChildrenItems[];
}

export interface SuperChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const HORIZONTALMENUITEMS = [
  {
    state: 'home',
    name: 'HOME',
    type: 'link',
    icon: 'home'
  },
  {
    state: 'users',
    name: 'USERS',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      {state: 'all', name: 'Users'},
      {state: 'add', name: 'New'},
      {state: 'pending', name: 'Pending'}
    ]
  },
  {
    state: 'employee',
    name: 'EMPLOYEE',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      {state: 'employee/add', name: 'ADD'},
      {state: 'employee/view', name: 'VIEW'}
    
    ]
  },

  {
    state: 'check',
    name: 'CHECK',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      {state: 'check/view', name: 'Add_CHECK'},
      {state: 'check/add', name: 'VIEW_CHECKS'}
    
    ]
  }
  ,
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
      {state: 'material/input', name: 'INPUT'},
      {state: 'material/checkbox', name: 'CHECKBOX'},
      {state: 'material/radio', name: 'RADIO'},
      {state: 'material/toolbar', name: 'TOOLBAR'},
      {state: 'material/lists', name: 'LISTS'},
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
    name: 'AUTHENTICATIONs',
    type: 'sub',
    icon: 'security',
    children: [
      {state: 'authentication/login', name: 'LOGIN'},
      {state: 'authentication/register', name: 'REGISTER'},
      {state: 'authentication/forgot-password', name: 'FORGOT'},
      {state: 'authentication/lockscreen', name: 'LOCKSCREEN'},
      {
        state: 'error',
        name: 'ERROR',
        type: 'super-sub',
        icon: 'error_outline',
        subchildren: [
          {state: 'error/404', name: '404'},
          {state: 'error/503', name: '503'}
        ]
      }
    ]
  }

];

@Injectable()
export class HorizontalMenuItems {
  getAll(): Menu[] {
    return HORIZONTALMENUITEMS;
  }
  add(menu: Menu) {
    // HORIZONTALMENUITEMS.push(Menu);
  }
}
