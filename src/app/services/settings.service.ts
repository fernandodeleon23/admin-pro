import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme')

  constructor() {

    console.log( 'Settings service' )

    this.getCurrentTheme()
  }

  getCurrentTheme(){

    let current = localStorage.getItem( 'theme' )

    if( current ){

     return current

    }else{
      return 'blue-dark'
    }
  }

  setTheme( theme:string ){

    localStorage.setItem( 'theme', './assets/css/colors/'+theme+'.css' )

    this.linkTheme?.setAttribute( 'href', './assets/css/colors/'+theme+'.css' )

  }
}
