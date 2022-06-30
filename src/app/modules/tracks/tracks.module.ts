import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* === Routing === */
import { TracksRoutingModule } from './tracks-routing.module';

/* === Componentes === */
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

/* === Módulos Compartidos === */
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    TracksPageComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ]
})
export class TracksModule { }
