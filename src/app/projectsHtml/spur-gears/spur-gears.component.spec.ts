import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpurGearsComponent } from './spur-gears.component';

describe('SpurGearsComponent', () => {
  let component: SpurGearsComponent;
  let fixture: ComponentFixture<SpurGearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpurGearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpurGearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
