import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmExperimentsComponent } from './tm-experiments.component';

describe('TmExperimentsComponent', () => {
  let component: TmExperimentsComponent;
  let fixture: ComponentFixture<TmExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
