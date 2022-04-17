import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

declare var gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email] ],
    password: ['', Validators.required],
    remember: [this.remember()]
  })

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.renderButton()
  }

  login(){

    this.usuarioService.login( this.loginForm.value ).subscribe(data=>{

      if( this.loginForm.get('remember')?.value ){
        localStorage.setItem( 'email', this.loginForm.get('email')?.value )
      }else{
        localStorage.removeItem( 'email' )
      }

      this._router.navigateByUrl('/')
      
    }, (err)=>{
      Swal.fire( 'Error', err.error.msg, 'error' )
    })
    

    console.log(this.loginForm.value)
    //location.href="http://localhost:4200";
  }

  onSuccess(googleUser:any) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }

  onFailure(error:any) {
    console.log(error);
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSuccess,
      'onfailure': this.onFailure
    });
  }

  remember(){

    if( localStorage.getItem('email') ){
      return true
    }

    return false
  }

}
