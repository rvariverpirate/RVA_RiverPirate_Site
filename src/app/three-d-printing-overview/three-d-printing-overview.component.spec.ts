import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDPrintingOverviewComponent } from './three-d-printing-overview.component';

describe('ThreeDPrintingOverviewComponent', () => {
  let component: ThreeDPrintingOverviewComponent;
  let fixture: ComponentFixture<ThreeDPrintingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDPrintingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDPrintingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
