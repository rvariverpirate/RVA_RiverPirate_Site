import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasBootComponent } from './das-boot.component';

describe('DasBootComponent', () => {
  let component: DasBootComponent;
  let fixture: ComponentFixture<DasBootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasBootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
