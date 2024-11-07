import { Component, Input } from '@angular/core';
import { BannerModel } from 'projects/app/src/app/shared/models/banner.model';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-banner-hero',
  templateUrl: './banner-hero.component.html',
  styleUrls: ['./banner-hero.component.scss']
})
export class BannerHeroComponent {

  swiperConfig: SwiperOptions = {
    spaceBetween: 4
  };

  @Input()
  bannerList: BannerModel[] = [];
}
