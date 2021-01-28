import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController, Platform, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-area-detalle',
  templateUrl: './area-detalle.component.html',
  styleUrls: ['./area-detalle.component.scss'],
})
export class AreaDetalleComponent implements OnInit {

  public listaElemento: any;
  public titulo: string;
  public listaVisible: any;
  public nivel: number;
  public segmentos: any;
  public datosSegmentos: any;

  public information1: any;
  public information2: any;

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

    this.information1 = [
      {
        id: 12,
        segment: 'tareas',
        datos: [
          {
            id: 1,
            name: "Tarea #1"
          },
          {
            id: 1,
            name: "Tarea #2"
          },
          {
            id: 1,
            name: "Tarea #3"
          }
        ]
      },
      {
        id: 12,
        segment: 'cargos',
        datos: [
          {
            id: 1,
            name: "Cargo #1"
          },
          {
            id: 1,
            name: "Cargo #2"
          },
          {
            id: 1,
            name: "Cargo #3"
          }
        ]
      },
      {
        id: 13,
        segment: 'sub-areas',
        datos: [
          {
            id: 1,
            name: "Sub área #1"
          },
          {
            id: 1,
            name: "Sub área #2"
          },
          {
            id: 1,
            name: "Sub área #3"
          }
        ]
      }
    ];

    this.information2 = [
      {
        id: 12,
        segment: 'tareas',
        datos: [
          {
            id: 1,
            name: "Tarea #1"
          },
          {
            id: 1,
            name: "Tarea #2"
          },
          {
            id: 1,
            name: "Tarea #3"
          }
        ]
      },
      {
        id: 12,
        segment: 'colaboradores',
        datos: [
          {
            id: 1,
            name: "Colaborador #1"
          },
          {
            id: 1,
            name: "Colaborador #2"
          },
          {
            id: 1,
            name: "Colaborador #3"
          }
        ]
      }
    ];

  }

  ngOnInit() { }

  async ionViewWillEnter() {

    this.listaElemento = await this.navParams.data['listaElemento'];

    this.titulo = await this.navParams.data['titulo'];

    this.nivel = await this.navParams.data['tipoArea'];
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
        return this.information1;

      case 2:
        return this.information2;
    }
  }

  segmentChanged(ev: any) {
    this.valorSegmento = ev.detail.value;
    console.log('Segment changed', this.valorSegmento);
  }

  async areaDetalle(id, titulo, areas) {
    const modal = await this.modalCtrl.create({
      component: AreaDetalleComponent,
      componentProps: {
        titulo: titulo,
        listaElemento: areas
      }
    });

    modal.onDidDismiss().then(async (resultado) => {
      console.log(resultado);
    });

    return await modal.present();
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
