import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mis-tareas-page-detalles',
  templateUrl: './mis-tareas-page-detalles.component.html',
  styleUrls: ['./mis-tareas-page-detalles.component.scss'],
})
export class MisTareasPageDetallesComponent implements OnInit {

  public data: any
  private backButtonSub: Subscription


  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private platform: Platform
  ) {
    this.data = []
   }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.data = await this.navParams.data['data'];
  }

  cancelar() {
    const resultado = {
      exito: false
    };

    this.modalController.dismiss(resultado);
  }

  ionViewDidEnter() {
    this.backButtonSub = this.platform.backButton.subscribeWithPriority(10000, () => {
      const resultado = {
        exito: false
      };
      this.modalController.dismiss(resultado);
    });
  }

  ionViewWillLeave() {
    this.backButtonSub.unsubscribe();
  }

}
