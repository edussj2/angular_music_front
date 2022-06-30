import { NgModule } from '@angular/core';

/* === Routing === */
import { RouterModule, Routes } from '@angular/router';

/* === Guards === */
import { SessionGuard } from '@core/guards/session.guard';

/* === Componentes === */
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

/* Carga perezosa de los módulos principales que rederizemos */
const routes: Routes = [
  {
    path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },

  /* Seleccionamos el Home como componentes padre  para redenrizar*/
  {
    path: '',
    component: HomePageComponent, 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [
      SessionGuard
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
