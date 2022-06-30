import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* === Modulos Reactivos === */
import { ReactiveFormsModule } from '@angular/forms';

/* === Routing === */
import { AuthRoutingModule } from './auth-routing.module';

/* === Componentes === */
import { AuthPageComponent } from './pages/auth-page/auth-page.component';


@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
