import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForagingOverviewComponent } from './foraging-overview.component';

describe('ForagingOverviewComponent', () => {
  let component: ForagingOverviewComponent;
  let fixture: ComponentFixture<ForagingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForagingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForagingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
