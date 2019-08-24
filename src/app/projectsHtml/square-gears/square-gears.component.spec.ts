import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareGearsComponent } from './square-gears.component';

describe('SquareGearsComponent', () => {
  let component: SquareGearsComponent;
  let fixture: ComponentFixture<SquareGearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareGearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareGearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
