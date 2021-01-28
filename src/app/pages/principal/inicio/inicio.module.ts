import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio.page';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth-guards';
import { TableroPage } from './tablero/tablero.page';
import { TableroPageModule } from './tablero/tablero.module';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'tablero',
        loadChildren: () => import('../../principal/inicio/tablero/tablero.module').then(m => m.TableroPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'areas',
        loadChildren: () => import('./areas/areas.module').then(m => m.AreasPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'tablero',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InicioPage]
})
export class InicioPageModule { }
