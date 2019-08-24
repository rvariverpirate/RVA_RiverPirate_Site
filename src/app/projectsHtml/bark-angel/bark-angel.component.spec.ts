import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkAngelComponent } from './bark-angel.component';

describe('BarkAngelComponent', () => {
  let component: BarkAngelComponent;
  let fixture: ComponentFixture<BarkAngelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarkAngelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarkAngelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
