import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisTareasPage } from './mis-tareas.page';
import { RouterModule } from '@angular/router';
import { MisTareasPageDetallesComponent } from './mis-tareas-page-detalles/mis-tareas-page-detalles.component';
import { MisTareasPageDetallesModule } from './mis-tareas-page-detalles/mis-tareas-page-detalles.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisTareasPageDetallesModule,
    RouterModule.forChild([
      {
        path: '',
        component: MisTareasPage
      }
    ])
  ],
  declarations: [MisTareasPage],
  entryComponents: [MisTareasPageDetallesComponent]
})
export class MisTareasPageModule {}
