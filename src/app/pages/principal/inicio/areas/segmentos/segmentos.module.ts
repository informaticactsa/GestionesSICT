
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SegmentosComponent } from './segmentos.component';

@NgModule({
  declarations: [
    SegmentosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    SegmentosComponent
  ]
})

export class SegmentosModule { }