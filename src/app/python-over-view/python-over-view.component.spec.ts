import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonOverViewComponent } from './python-over-view.component';

describe('PythonOverViewComponent', () => {
  let component: PythonOverViewComponent;
  let fixture: ComponentFixture<PythonOverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonOverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
