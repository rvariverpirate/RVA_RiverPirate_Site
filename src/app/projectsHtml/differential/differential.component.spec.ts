import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentialComponent } from './differential.component';

describe('DifferentialComponent', () => {
  let component: DifferentialComponent;
  let fixture: ComponentFixture<DifferentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
