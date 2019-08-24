import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelToSerialComponent } from './parallel-to-serial.component';

describe('ParallelToSerialComponent', () => {
  let component: ParallelToSerialComponent;
  let fixture: ComponentFixture<ParallelToSerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelToSerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelToSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
