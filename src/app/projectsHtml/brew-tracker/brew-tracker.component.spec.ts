import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewTrackerComponent } from './brew-tracker.component';

describe('BrewTrackerComponent', () => {
  let component: BrewTrackerComponent;
  let fixture: ComponentFixture<BrewTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
