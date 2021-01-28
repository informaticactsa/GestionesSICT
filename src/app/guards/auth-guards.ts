import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private nav: NavController,
  ) {

  }

  canActivate() {
    if (!localStorage.getItem('token')) {
      this.nav.navigateRoot(['iniciar-sesion']);
      return false;
    } else {
      return true;
    }
  }
}
