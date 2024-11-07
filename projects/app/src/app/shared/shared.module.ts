import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BannerHeroComponent } from './components/banner-hero/banner-hero.component';
import { SwiperDirective } from './directives/swiper.directive';

@NgModule({
  declarations: [
    SwiperDirective,
    BannerHeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwiperDirective,
    BannerHeroComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
