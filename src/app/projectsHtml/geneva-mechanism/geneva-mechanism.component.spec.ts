import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenevaMechanismComponent } from './geneva-mechanism.component';

describe('GenevaMechanismComponent', () => {
  let component: GenevaMechanismComponent;
  let fixture: ComponentFixture<GenevaMechanismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenevaMechanismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenevaMechanismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
