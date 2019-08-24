import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverScraperComponent } from './river-scraper.component';

describe('RiverScraperComponent', () => {
  let component: RiverScraperComponent;
  let fixture: ComponentFixture<RiverScraperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverScraperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverScraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
