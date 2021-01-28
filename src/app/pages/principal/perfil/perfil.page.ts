import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { LoadingService } from 'src/app/service/loading.service';
import { MensajeToastService } from 'src/app/service/mensaje-toast.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  isLoading: boolean = false;

  constructor(
    private nav: NavController,
    private loadingCtrl: LoadingController,
    private show: MensajeToastService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
  }

  cerrarSesion() {
    //Usar loading
    this.loadingService.showLoader();
    localStorage.clear();
    this.nav.navigateRoot(["/"]);
    this.show.mensajeToast(1, 'Sesión finalizada', 3000);
    this.loadingService.hideLoader();
  }
}
