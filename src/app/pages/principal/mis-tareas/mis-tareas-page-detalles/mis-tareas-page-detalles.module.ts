
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MisTareasPageDetallesComponent } from './mis-tareas-page-detalles.component';



@NgModule({
  declarations: [
    MisTareasPageDetallesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    MisTareasPageDetallesComponent
  ]
})
export class MisTareasPageDetallesModule { }
