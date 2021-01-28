import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalPage } from './principal.page';
import { AuthGuard } from 'src/app/guards/auth-guards';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'mis-tareas',
        loadChildren: () => import('./mis-tareas/mis-tareas.module').then(m => m.MisTareasPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('./notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule { }
