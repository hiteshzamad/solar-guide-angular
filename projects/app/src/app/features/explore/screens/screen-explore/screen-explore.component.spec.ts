import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenExploreComponent } from './screen-explore.component';

describe('ScreenExploreComponent', () => {
  let component: ScreenExploreComponent;
  let fixture: ComponentFixture<ScreenExploreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenExploreComponent]
    });
    fixture = TestBed.createComponent(ScreenExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
