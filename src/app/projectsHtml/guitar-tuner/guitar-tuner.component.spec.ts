import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarTunerComponent } from './guitar-tuner.component';

describe('GuitarTunerComponent', () => {
  let component: GuitarTunerComponent;
  let fixture: ComponentFixture<GuitarTunerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarTunerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarTunerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
