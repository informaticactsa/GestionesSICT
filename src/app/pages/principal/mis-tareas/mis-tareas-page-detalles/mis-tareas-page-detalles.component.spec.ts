import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisTareasPageDetallesComponent } from './mis-tareas-page-detalles.component';

describe('MisTareasPageDetallesComponent', () => {
  let component: MisTareasPageDetallesComponent;
  let fixture: ComponentFixture<MisTareasPageDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTareasPageDetallesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisTareasPageDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
