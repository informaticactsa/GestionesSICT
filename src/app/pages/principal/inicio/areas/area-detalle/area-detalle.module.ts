import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AreaDetalleComponent } from './area-detalle.component';

@NgModule({
  declarations: [
    AreaDetalleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    AreaDetalleComponent
  ],
})

export class AreaDetalleModule { }