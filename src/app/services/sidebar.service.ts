import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      title: 'Dashboard',
      'icon': 'mdi mdi-gauge',
      submenu: [
        {
          'title': 'Main',
          'url': 'index'
        },
        {
          'title': 'Grafica',
          'url': 'grafica'
        },
        {
          'title': 'Progressbar',
          'url': 'progress'
        },
        {
          'title': 'Promesas',
          'url': 'promesas'
        }
      ]
    }
  ]

  constructor() { }
}
