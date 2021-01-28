import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CodigoRespuesta } from 'src/app/@core/enumerable/codigo-respuesta';
import { MisTareasService } from 'src/app/service/mistareas.service';
import { MisTareasPageDetallesComponent } from './mis-tareas-page-detalles/mis-tareas-page-detalles.component';

@Component({
  selector: 'app-mis-tareas',
  templateUrl: './mis-tareas.page.html',
  styleUrls: ['./mis-tareas.page.scss'],
})
export class MisTareasPage implements OnInit {
   
  listaTareas: any;

  constructor(
    private misTareasService: MisTareasService,
    private modalController: ModalController, 
    private navController: NavController
    ) { }

  ngOnInit() {
    this.obtenerInformacion()
  }

  async obtenerInformacion() {
    const resultado = await this.misTareasService.get().toPromise();

    if(resultado.exito == CodigoRespuesta.Exito) {
      this.listaTareas = resultado.dato
    } else {

    }
  }

  async mostrarDetalleTarea(item) {
    //this.navController.navigateRoot(['/sidsds'])

    const modal = await this.modalController.create({
      component: MisTareasPageDetallesComponent,
      componentProps: {
        data: item
      }
    });

    modal.onDidDismiss().then(async (resultado) => {
      this.obtenerInformacion()
    });

    return await modal.present();
  }


  desactivarMistareas(item){
    console.log("metodo desactivar - " + item.titulo);
  }

  reAsignarMistareas(item){
    console.log("metodo reasignar - " + item.titulo);
  }

  finalizarMistareas(item){
    console.log("metodo finalizar - " + item.titulo);
  }

  imprimirMistareas(item){
    console.log("metodo imprimir - " + item.titulo);
  }

}
