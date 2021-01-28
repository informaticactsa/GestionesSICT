import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarSesionPage } from './iniciar-sesion.page';
import { RouterModule, Routes } from '@angular/router';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import('lottie-web');
}

const routes: Routes = [
  {
    path: '',
    component: IniciarSesionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LottieModule.forRoot({
      player: playerFactory
    }),
    RouterModule.forChild(routes)
  ],
  declarations: [IniciarSesionPage]
})
export class IniciarSesionPageModule {}
