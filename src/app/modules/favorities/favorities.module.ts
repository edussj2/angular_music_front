import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* === Routing === */
import { FavoritiesRoutingModule } from './favorities-routing.module';

/* === Componentes === */
import { FavoritiesPageComponent } from './pages/favorities-page/favorities-page.component';

/* ==== Compartidos === */
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    FavoritiesPageComponent
  ],
  imports: [
    CommonModule,
    FavoritiesRoutingModule,
    SharedModule
  ]
})
export class FavoritiesModule { }
