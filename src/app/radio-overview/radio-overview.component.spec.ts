import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOverviewComponent } from './radio-overview.component';

describe('RadioOverviewComponent', () => {
  let component: RadioOverviewComponent;
  let fixture: ComponentFixture<RadioOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
