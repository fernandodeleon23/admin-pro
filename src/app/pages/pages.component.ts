import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme')

  constructor(
    private _settings: SettingsService
  ){}

  ngOnInit(): void {

    let theme = this._settings.getCurrentTheme();

    if( theme == 'blue-dark' ){
      this.linkTheme?.setAttribute( 'href', './assets/css/colors/'+theme+'.css' )
    }else{
      this.linkTheme?.setAttribute( 'href', theme )
    }

  }

}
