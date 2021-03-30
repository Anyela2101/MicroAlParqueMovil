import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./pages/restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  },
  {
    path: 'consultarestaurante',
    loadChildren: () => import('./pages/consultarestaurante/consultarestaurante.module').then( m => m.ConsultarestaurantePageModule)
  },
  {
    path: 'ver-datos/:numero',
    loadChildren: () => import('./pages/ver-datos/ver-datos.module').then( m => m.VerDatosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
