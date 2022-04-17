import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { LoginForm } from '../interfaces/loginForm.interface';
import { RegisterForm } from '../interfaces/registerForm.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = environment.base_url

  constructor(
    private http: HttpClient
  ) { }

  validarToken(){
    const token = localStorage.getItem( 'token' ) || ''

    return this.http.get( this.baseUrl+'/login/renew', {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp:any)=>{
        localStorage.setItem( 'token', resp.token )
      }),
      map( resp => true ),
      catchError( err => of(false) )
    )
  }

  crearUsuario( form: RegisterForm ){

    return this.http.post( this.baseUrl+'/usuarios', form ).pipe( tap( (resp: any) => {
      localStorage.setItem( 'token', resp.token )
    } ) )
  }

  login( form: LoginForm ){

    return this.http.post( this.baseUrl+'/login', form ).pipe( tap( (resp: any) => {
      localStorage.setItem( 'token', resp.token )
    } ) )
    
  }

  logout(){

    localStorage.removeItem('token')
  }
}
