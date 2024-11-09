import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { FactModel } from '../../../../core/models/fact.model';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.scss']
})
export class FactComponent {

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  swiperConfig: SwiperOptions = {
    loop: true,
    spaceBetween: '16',
  };

  @Input()
  factList: FactModel[] = []

  ngAfterViewInit(): void {
    this.swiper.nativeElement.swiper.autoplay.start();
  }

}
