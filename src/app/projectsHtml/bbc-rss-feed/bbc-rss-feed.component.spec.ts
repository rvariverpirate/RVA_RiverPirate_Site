import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcRssFeedComponent } from './bbc-rss-feed.component';

describe('BbcRssFeedComponent', () => {
  let component: BbcRssFeedComponent;
  let fixture: ComponentFixture<BbcRssFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbcRssFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcRssFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
