import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftReg4BitComponent } from './shift-reg-4-bit.component';

describe('ShiftReg4BitComponent', () => {
  let component: ShiftReg4BitComponent;
  let fixture: ComponentFixture<ShiftReg4BitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftReg4BitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftReg4BitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
