import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreasPage } from './areas.page';
import { RouterModule } from '@angular/router';
import { SegmentosComponent } from './segmentos/segmentos.component';
import { SegmentosModule } from './segmentos/segmentos.module';
import { TareasComponent } from './segmentos/tareas/tareas.component';
import { CargosComponent } from './segmentos/cargos/cargos.component';
import { SubAreasComponent } from './segmentos/sub-areas/sub-areas.component';
import { TareaDetalleModule } from './tarea-detalle/tarea-detalle.module';
import { TareaDetalleComponent } from './tarea-detalle/tarea-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentosModule,
    TareaDetalleModule,
    RouterModule.forChild([
      {
        path: '',
        component: AreasPage
      }
    ])
  ],
  declarations: [AreasPage, TareasComponent, CargosComponent, SubAreasComponent],
  entryComponents: [SegmentosComponent, TareaDetalleComponent]
})
export class AreasPageModule {}
