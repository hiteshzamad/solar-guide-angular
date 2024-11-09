import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCelestialComponent } from './screen-celestial.component';

describe('ScreenCelestialComponent', () => {
  let component: ScreenCelestialComponent;
  let fixture: ComponentFixture<ScreenCelestialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenCelestialComponent]
    });
    fixture = TestBed.createComponent(ScreenCelestialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
