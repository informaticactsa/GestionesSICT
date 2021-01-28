import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TareaDetalleComponent } from './tarea-detalle.component';

@NgModule({
  declarations: [
    TareaDetalleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    TareaDetalleComponent
  ],
})

export class TareaDetalleModule { }