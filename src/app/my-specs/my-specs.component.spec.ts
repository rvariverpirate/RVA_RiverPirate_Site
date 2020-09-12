import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpecsComponent } from './my-specs.component';

describe('MySpecsComponent', () => {
  let component: MySpecsComponent;
  let fixture: ComponentFixture<MySpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
