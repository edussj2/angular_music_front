import { Component, OnInit } from '@angular/core';

/* === Routing === */
import { Router } from '@angular/router';

/* === FormControl === */
import { FormControl, FormGroup, Validators } from '@angular/forms';

/* === Servicios === */
import { AuthService } from '@modules/auth/services/auth.service';

/* === Cookie Servie === */
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})

export class AuthPageComponent implements OnInit {

  //FormGroup
  public formLogin: FormGroup = new FormGroup({});
  //Flag error
  public errorSession: boolean = false;

  /* === Constructor === */
  constructor(
    private _authService: AuthService,
    private _cookie: CookieService,
    private _router: Router,
  ) { 

  }


  /* === Inicial === */
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(60),
        ]),
        password:  new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ]),
      }
    );
  }


  /* === Envio de Datos === */
  sendLogin(): void{
    const { email, password } = this.formLogin.value;
    this._authService.sendCredentials(email, password)
      .subscribe( 
        response => {
          const { tokenSession, data } = response; 
          this._cookie.set('token', tokenSession, 4, '/');
          this._router.navigate(['/','tracks']);
        },
        error => {
          this.errorSession = true;
          console.log('🚩Error de inicioo de sesión',error);
          alert('Las credenciales no son válida 😒🤦‍♀️');
        }
      );
  }

}
