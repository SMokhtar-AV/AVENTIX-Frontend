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
