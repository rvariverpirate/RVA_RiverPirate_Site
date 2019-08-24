import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OledExperimentsComponent } from './oled-experiments.component';

describe('OledExperimentsComponent', () => {
  let component: OledExperimentsComponent;
  let fixture: ComponentFixture<OledExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OledExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OledExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
