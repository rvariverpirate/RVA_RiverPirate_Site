import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaryGearsComponent } from './planetary-gears.component';

describe('PlanetaryGearsComponent', () => {
  let component: PlanetaryGearsComponent;
  let fixture: ComponentFixture<PlanetaryGearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetaryGearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetaryGearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
