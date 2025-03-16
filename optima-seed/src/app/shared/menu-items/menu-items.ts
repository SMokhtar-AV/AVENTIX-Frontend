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
    state: 'users',
    name: 'USERS',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      {state: 'all', name: 'Users'},
      {state: 'add', name: 'New'},
      {state: 'pending', name: 'Pending'}
    ]
  } 
  ,
  {
    state: 'facture',
    name: 'facture',
    type: 'sub',  
    icon: 'security',
    children: [
      {state: 'ajouter', name: 'LOGIN'},
      {state: 'lister', name: 'REGISTER'}
  
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
