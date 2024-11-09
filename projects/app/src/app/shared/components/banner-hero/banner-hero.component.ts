import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BannerModel } from 'projects/app/src/app/shared/models/banner.model';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-banner-hero',
  templateUrl: './banner-hero.component.html',
  styleUrls: ['./banner-hero.component.scss']
})
export class BannerHeroComponent {

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  swiperConfig: SwiperOptions = {
    spaceBetween: 4
  };

  @Input()
  bannerList: BannerModel[] = [];

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.autoplay.start();
  }
}
