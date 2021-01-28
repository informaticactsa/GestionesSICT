import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AreaDetalleComponent } from './area-detalle/area-detalle.component';
import { TareaDetalleComponent } from './tarea-detalle/tarea-detalle.component';

import { TareasComponent } from './segmentos/tareas/tareas.component';
import { CargosComponent } from './segmentos/cargos/cargos.component';
import { SubAreasComponent } from './segmentos/sub-areas/sub-areas.component';
import { SegmentosComponent } from './segmentos/segmentos.component';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.page.html',
  styleUrls: ['./areas.page.scss'],
})
export class AreasPage implements OnInit {

  listaTareas: any[];
  listaCargos: any[];
  listaSubareas: any[];

  valorSegmento: any;

  tareas = TareasComponent;
  cargos = CargosComponent;
  subareas = SubAreasComponent;

  constructor(
    private modalCtrl: ModalController
  ) {

    this.valorSegmento = 'tareas';

    this.listaTareas = [
      {
        id: 1,
        name: "Tareas #1",
        responsable: "Responsable Juanito"
      },
      {
        id: 1,
        name: "Tareas #2",
        responsable: "Responsable Juancho"
      },
      {
        id: 1,
        name: "Tareas #3",
        responsable: "Responsable Juan"
      }
    ];

    this.listaCargos = [
      {
        id: 1,
        name: "Gerencia general"
      },
      {
        id: 1,
        name: "Gerencia financiera"
      },
      {
        id: 1,
        name: "Asistente de gerencia"
      }
    ];

    this.listaSubareas = [
      {
        id: 11,
        name: "Gerencia informatica",
        noAreas: 2,
        noMiembros: 6
      },
      {
        id: 12,
        name: "Gerencia comercial",
        noAreas: 2,
        noMiembros: 8
      },
      {
        id: 13,
        name: "Recursos humanos",
        noAreas: 1,
        noMiembros: 6
      }
    ];

  }

  ngOnInit() {

  }

  segmentChanged(ev: any) {
    this.valorSegmento = ev.detail.value;
    console.log('Segment changed', this.valorSegmento);
  }

  /* toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  } */

  segmentosComponent = async (segmento, titulo) => {
    const modal = await this.modalCtrl.create({
      component: SegmentosComponent,
      componentProps: {
        segmento: segmento,
        titulo: titulo
      }
    });

    modal.onDidDismiss().then(async (resultado) => {
      console.log(resultado);
    });

    return await modal.present();
  }

  tareaComponent = async (titulo) => {
    const modal = await this.modalCtrl.create({
      component: TareaDetalleComponent,
      componentProps: {
        titulo: titulo
      }
    });

    modal.onDidDismiss().then(async (resultado) => {
      console.log(resultado);
    });

    return await modal.present();
  }

}
