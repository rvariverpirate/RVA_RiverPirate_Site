import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxingBluetoothComponent } from './boxing-bluetooth.component';

describe('BoxingBluetoothComponent', () => {
  let component: BoxingBluetoothComponent;
  let fixture: ComponentFixture<BoxingBluetoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxingBluetoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxingBluetoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
