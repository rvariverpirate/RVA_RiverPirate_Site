import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewBuddyComponent } from './brew-buddy.component';

describe('BrewBuddyComponent', () => {
  let component: BrewBuddyComponent;
  let fixture: ComponentFixture<BrewBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
