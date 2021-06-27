import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme')

  constructor(
    private _settings: SettingsService
  ) { }

  ngOnInit(): void {

    this.checkCurrentTheme()
  }

  changeTheme( theme:string ){

    this._settings.setTheme( theme )

    this.checkCurrentTheme()
    
  }

  checkCurrentTheme(){

    const links = document.querySelectorAll( '.selector' )

    links.forEach( elem => {
      elem.classList.remove( 'working' )

      const btnTheme = elem.getAttribute('data-theme')
      const btnThemeUrl = './assets/css/colors/'+btnTheme+'.css'
      const currentTheme = this.linkTheme?.getAttribute('href')

      if( btnThemeUrl === currentTheme ){
        elem.classList.add('working')
      }
    })
  }

}
