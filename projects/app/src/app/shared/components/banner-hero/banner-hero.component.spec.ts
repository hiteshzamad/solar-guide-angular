import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHeroComponent } from './banner-hero.component';

describe('BannerHeroComponent', () => {
  let component: BannerHeroComponent;
  let fixture: ComponentFixture<BannerHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerHeroComponent]
    });
    fixture = TestBed.createComponent(BannerHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
