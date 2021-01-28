import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableroPage } from './tablero.page';

describe('TableroPage', () => {
  let component: TableroPage;
  let fixture: ComponentFixture<TableroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
