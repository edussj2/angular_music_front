import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* === Routing === */
import { HistoryRoutingModule } from './history-routing.module';

/* === Componentes === */
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SearchComponent } from './components/search/search.component';

/* ==== Compartidos === */
import { SharedModule } from '@shared/shared.module';

/* === Forms ngmodel === */
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HistoryPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HistoryModule { }
