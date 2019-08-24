import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HBridgeComponent } from './h-bridge.component';

describe('HBridgeComponent', () => {
  let component: HBridgeComponent;
  let fixture: ComponentFixture<HBridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HBridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
