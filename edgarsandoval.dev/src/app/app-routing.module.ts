import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'edgar-sandoval',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'galeria',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'proyectos',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'servicios',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
