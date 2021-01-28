import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {

  @Input() tareaComponent: any;
  @Input() listaTareas: any;

  public listaVisible: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {

    this.listaVisible = [];
   }

  ngOnInit() {}

  async ionViewWillEnter() {

    this.changeDetectorRef.detectChanges();

  }

  tareaItemComponent(titulo) {
    this.tareaComponent(titulo);
  }

}
