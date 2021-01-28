import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MensajeToastService } from 'src/app/service/mensaje-toast.service';
import { NavController } from '@ionic/angular';
import { CodigoRespuesta } from 'src/app/@core/enumerable/codigo-respuesta';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  options: AnimationOptions = {
    path: '../../../assets/task.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '120px',
    maxHeight: '120px',
    margin: '0',
    padding: '0'
  };

  public iniciarSesionForm: any;
  public validation_messages = {
    Contrasena: [
      { type: 'required', message: 'La contraseña es requerida' }
    ],
    Usuario: [
      { type: 'required', message: 'El usuario es requerido' }/* ,
      { type: 'email', message: 'Por favor ingrese un correo electronico valido' } */
    ]
  };

  constructor(
    private usuarioService: AutenticacionService,
    private formBuilder: FormBuilder,
    private show: MensajeToastService,
    private nav: NavController
  ) {
    this.iniciarSesionForm = this.formBuilder.group({
      Usuario: ['', [Validators.required]],
      Contrasena: ['', [Validators.required]]
    });
  }

  get Usuario() {
    return this.iniciarSesionForm.get('Usuario');
  }
  get Contrasena() {
    return this.iniciarSesionForm.get('Contrasena');
  }

  ngOnInit() {
  }

  async onSubmit(usuario) {
    if (this.iniciarSesionForm.valid) {

      const modAutenticacion = {
        NombreUsuario: usuario.Usuario,
        Contrasena: usuario.Contrasena
      };

      const resultado = await this.usuarioService.post(modAutenticacion).toPromise();

      if (resultado.exito == CodigoRespuesta.Exito) {

        localStorage.setItem('idCargo', resultado.dato.usuarioAPI.idCargo);
        localStorage.setItem('nombreCargo', resultado.dato.usuarioAPI.nombreCargo);
        localStorage.setItem('idUsuario', resultado.dato.usuarioAPI.idUsuario);
        localStorage.setItem('nombreUsuario', resultado.dato.usuarioAPI.nombreUsuario);
        localStorage.setItem('nombrePersonal', resultado.dato.usuarioAPI.nombrePersonal);
        localStorage.setItem('token', resultado.dato.usuarioAPI.token);

        this.nav.navigateRoot(["principal"]);

        // loading.dismiss();
        this.show.mensajeToast(resultado.exito, resultado.mensaje, 3000);
      } else {
        // loading.dismiss();
        this.show.mensajeToast(resultado.exito, resultado.mensaje, 3000);
      }
    }
  }

}
