import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss'],
})
export class CargosComponent implements OnInit {

  @Input() segmentosComponent: any;
  @Input() listaCargos: any;

  public listaVisible: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.listaVisible = [];
  }

  ngOnInit() { }

  async ionViewWillEnter() {

    this.changeDetectorRef.detectChanges();

  }

  segmentoItemComponent(segmento, titulo) {
    this.segmentosComponent(segmento, titulo);
  }

}
