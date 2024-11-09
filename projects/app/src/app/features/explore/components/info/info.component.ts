import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CelestialTypeModel } from '../../../../core/models/celestial-type.model';
import { SwiperOptions } from 'swiper/types';
import { CelestialModel } from '../../../../core/models/celestial.model';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  @Input() celestialTypeList: CelestialTypeModel[] = []

  @Output()
  celestialClick = new EventEmitter<CelestialModel>();

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  selectedCelestialIndex: number = 0;

  swiperConfig: SwiperOptions = {
    spaceBetween: '16',
    breakpoints: {
      0: { slidesPerView: 2 },
      576: { slidesPerView: 4 },
      768: { slidesPerView: 6 },
      1024: { slidesPerView: 8 }
    }
  };

  onCelestialTypeClick(index: number) {
    this.selectedCelestialIndex = index
  }

  onCelestialClick(celestial: CelestialModel) {
    this.celestialClick.emit(celestial);
  }
}
