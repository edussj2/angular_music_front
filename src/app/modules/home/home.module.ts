import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* === Routing === */
import { HomeRoutingModule } from './home-routing.module';

/* === Componentes === */
import { HomePageComponent } from './pages/home-page/home-page.component';

/* === Módulos Compartidos === */
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
