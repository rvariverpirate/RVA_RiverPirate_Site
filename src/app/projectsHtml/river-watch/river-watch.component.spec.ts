import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverWatchComponent } from './river-watch.component';

describe('RiverWatchComponent', () => {
  let component: RiverWatchComponent;
  let fixture: ComponentFixture<RiverWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
