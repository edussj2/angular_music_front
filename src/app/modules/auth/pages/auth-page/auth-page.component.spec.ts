import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthPageComponent } from './auth-page.component';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule],
      declarations: [ AuthPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*  Debe asesgurarse que el formulario sea invalido con datos erroneos */
  it('👌 Debería retornar invalido el formulario',() => {
    
    //Arranque
    const mockCredentials = {
      email: '0x0x0x0x',
      password: '1234567890222222'
    }

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //Accion
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    //Lo que esperamos
    expect(component.formLogin.invalid).toEqual(true);
  });


  /*  Debe asesgurarse que el formulario sea valido con datos correctos */
  it('👌 Debería retornar valido el formulario',() => {
    
    //Arranque
    const mockCredentials = {
      email: 'educespedes1998@gmail.com',
      password: '12345678'
    }

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //Accion
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    //Lo que esperamos
    expect(component.formLogin.invalid).toEqual(false);
  });


  /*  El boton deberia tener la oracion "Iniciar Sesion" */
  it('👌 Debería el boton la plabra "Iniciar Sesion"', () => {
    
    //Arranque
    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    //Accion
    const getInnerText = elementRef.nativeElement.innerText;

    //Lo que esperamos
    expect(getInnerText).toEqual('Iniciar sesión');
  });


  

});
