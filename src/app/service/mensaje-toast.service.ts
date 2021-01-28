import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CodigoRespuesta } from '../@core/enumerable/codigo-respuesta';

@Injectable({
    providedIn: 'root'
})
export class MensajeToastService {

    constructor(private toastCtrl: ToastController) { }

    async mensajeToast(codigoRepuesta, descripcion, duracion) {
        let resultado = this.obtenerTitulo(codigoRepuesta);
        const toast = await this.toastCtrl.create({
            color: resultado.Color,
            header: '¡' + resultado.Titulo + '!',
            message: descripcion,
            position: 'bottom',
            duration: duracion,
            buttons: [
                {
                    text: 'Cerrar',
                    role: 'cancel',
                    handler: () => {
                        /* console.log('Cancel clicked'); */
                    }
                }
            ]
        });
        toast.present();
    }

    obtenerTitulo(codigoRepuesta) {
        switch (codigoRepuesta) {
            case CodigoRespuesta.Exito:
                return { Titulo: 'Éxito', Color: 'success' };

            case CodigoRespuesta.Advertencia:
                return { Titulo: 'Advertencia', Color: 'warning' };

            case CodigoRespuesta.Error:
                return { Titulo: 'Error', Color: 'danger' };
        }
    }
}