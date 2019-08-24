import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleGearingComponent } from './multiple-gearing.component';

describe('MultipleGearingComponent', () => {
  let component: MultipleGearingComponent;
  let fixture: ComponentFixture<MultipleGearingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleGearingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleGearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
