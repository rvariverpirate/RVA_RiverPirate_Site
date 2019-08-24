import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUartComponent } from './basic-uart.component';

describe('BasicUartComponent', () => {
  let component: BasicUartComponent;
  let fixture: ComponentFixture<BasicUartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicUartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
