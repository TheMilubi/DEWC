import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoDetalleComponent } from './gato-detalle.component';

describe('GatoDetalleComponent', () => {
  let component: GatoDetalleComponent;
  let fixture: ComponentFixture<GatoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
