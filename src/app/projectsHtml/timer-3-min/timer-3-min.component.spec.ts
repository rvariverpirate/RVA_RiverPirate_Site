import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Timer3MinComponent } from './timer-3-min.component';

describe('Timer3MinComponent', () => {
  let component: Timer3MinComponent;
  let fixture: ComponentFixture<Timer3MinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timer3MinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Timer3MinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
