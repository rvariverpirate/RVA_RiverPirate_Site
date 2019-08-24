import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanismsOverviewComponent } from './mechanisms-overview.component';

describe('MechanismsOverviewComponent', () => {
  let component: MechanismsOverviewComponent;
  let fixture: ComponentFixture<MechanismsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanismsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanismsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
