import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsOverviewComponent } from './robotics-overview.component';

describe('RoboticsOverviewComponent', () => {
  let component: RoboticsOverviewComponent;
  let fixture: ComponentFixture<RoboticsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
