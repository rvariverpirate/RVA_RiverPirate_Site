import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsOverViewComponent } from './electronics-over-view.component';

describe('ElectronicsOverViewComponent', () => {
  let component: ElectronicsOverViewComponent;
  let fixture: ComponentFixture<ElectronicsOverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsOverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
