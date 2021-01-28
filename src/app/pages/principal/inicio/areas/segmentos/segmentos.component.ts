import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';

import { TareasComponent } from './tareas/tareas.component';
import { CargosComponent } from './cargos/cargos.component';
import { SubAreasComponent } from './sub-areas/sub-areas.component';

@Component({
  selector: 'app-segmentos',
  templateUrl: './segmentos.component.html',
  styleUrls: ['./segmentos.component.scss'],
})
export class SegmentosComponent implements OnInit {

  tareas = TareasComponent;
  cargos = CargosComponent;
  subareas = SubAreasComponent;

  public listaElemento: any;
  public titulo: string;
  public listaVisible: any;
  public nivel: number;
  public segmentos: any;
  public datosSegmentos: any;

  valorSegmento: any;

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
    private changeDetectorRef: ChangeDetectorRef,
    private navParams: NavParams
  ) {
    this.listaElemento = [];
    this.listaVisible = [];
    this.titulo = 'Cargando...';
    this.segmentos = [];
    this.datosSegmentos = [];
  }

  ngOnInit() { }

  async ionViewWillEnter() {

    this.listaElemento = await this.navParams.data['listaElemento'];

    this.titulo = await this.navParams.data['titulo'];

    this.nivel = await this.navParams.data['segmento'];
    this.segmentos = this.generarSegmentos(this.nivel);
    this.valorSegmento = this.segmentos[0].valor;
    this.datosSegmentos = this.obtenerDatosSegmentos(this.nivel);

    this.listaVisible = this.listaElemento;

    this.platform.backButton.subscribeWithPriority(9999, () => {
      const resultado = {
        exito: false
      };

      this.modalCtrl.dismiss(resultado);
    });

    this.changeDetectorRef.detectChanges();

  }

  generarSegmentos(nivel) {
    switch (nivel) {
      case 1:
        return [
          {
            nombre: 'Tareas',
            valor: 'tareas'
          },
          {
            nombre: 'Cargos',
            valor: 'cargos'
          },
          {
            nombre: 'Sub áreas',
            valor: 'sub-areas'
          }
        ];

      case 2:
        return [
          {
            nombre: 'Tareas',
            valor: 'tareas'
          },
          {
            nombre: 'Colaboradores',
            valor: 'colaboradores'
          }
        ];
    }
  }

  obtenerDatosSegmentos(nivel) {
    switch (nivel) {
      case 1:
        return [];

      case 2:
        return [];
    }
  }

  segmentChanged(ev: any) {
    this.valorSegmento = ev.detail.value;
    console.log('Segment changed', this.valorSegmento);
  }

  cancelar() {
    const resultado = {
      exito: false
    };

    this.modalCtrl.dismiss(resultado);
  }

  ionViewDidEnter() {
    this.platform.backButton.subscribeWithPriority(9999, () => {
      const resultado = {
        exito: false
      };
      this.modalCtrl.dismiss(resultado);
    });
  }


}
