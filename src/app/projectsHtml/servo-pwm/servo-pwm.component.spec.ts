import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServoPwmComponent } from './servo-pwm.component';

describe('ServoPwmComponent', () => {
  let component: ServoPwmComponent;
  let fixture: ComponentFixture<ServoPwmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServoPwmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServoPwmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
