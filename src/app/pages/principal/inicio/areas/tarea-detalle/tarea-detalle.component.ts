import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Platform, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.component.html',
  styleUrls: ['./tarea-detalle.component.scss'],
})
export class TareaDetalleComponent implements OnInit {

  public listaElemento: any;
  public titulo: string;
  public listaVisible: any;

  constructor(
    private platform: Platform,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.listaElemento = [];
    this.listaVisible = [];
    this.titulo = 'Cargando...';
  }

  ngOnInit() { }

  async ionViewWillEnter() {

    this.listaElemento = await this.navParams.data['listaElemento'];

    this.titulo = await this.navParams.data['titulo'];

    this.listaVisible = this.listaElemento;

    this.platform.backButton.subscribeWithPriority(9999, () => {
      const resultado = {
        exito: false
      };

      this.modalCtrl.dismiss(resultado);
    });

    this.changeDetectorRef.detectChanges();

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
