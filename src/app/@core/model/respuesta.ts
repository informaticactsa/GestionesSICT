export class Respuesta {
    exito: number;
    mensaje: string;
    dato: any;

    constructor(exito, mensaje, dato) {
        this.exito = exito;
        this.mensaje = mensaje;
        this.dato = dato;
    }
}