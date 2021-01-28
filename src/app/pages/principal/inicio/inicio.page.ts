import { Component, OnInit } from '@angular/core';
import { TableroPage } from './tablero/tablero.page'
import { AreasPage } from './areas/areas.page'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  tablero = TableroPage;
  areas = AreasPage;

  valorSegmento: any;

  constructor() {
    this.valorSegmento = 'tablero';
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.valorSegmento = ev.detail.value;
    console.log('Segment changed', this.valorSegmento);
  }

}
