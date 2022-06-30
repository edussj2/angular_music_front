import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Carga perezosa de los modulos internos, que no destruyen el layout */
const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: 'favorities',
    loadChildren: () => import('@modules/favorities/favorities.module').then(m => m.FavoritiesModule)
  },
  {
    path: '**',
    redirectTo: 'tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
