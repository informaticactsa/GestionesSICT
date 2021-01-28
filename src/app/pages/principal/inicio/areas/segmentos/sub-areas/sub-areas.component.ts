import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-sub-areas',
  templateUrl: './sub-areas.component.html',
  styleUrls: ['./sub-areas.component.scss'],
})
export class SubAreasComponent implements OnInit {

  @Input() segmentosComponent: any;
  @Input() listaSubareas: any;

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
