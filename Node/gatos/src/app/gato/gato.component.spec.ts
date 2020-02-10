import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoComponent } from './gato.component';

describe('GatoComponent', () => {
  let component: GatoComponent;
  let fixture: ComponentFixture<GatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
