import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenHomeComponent } from './screen-home.component';

describe('ScreenHomeComponent', () => {
  let component: ScreenHomeComponent;
  let fixture: ComponentFixture<ScreenHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenHomeComponent]
    });
    fixture = TestBed.createComponent(ScreenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
