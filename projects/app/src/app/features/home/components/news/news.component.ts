import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { NewsModel } from '../../../../core/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  swiperConfig: SwiperOptions = {
    spaceBetween: '16',
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 }
    }
  };

  @Input()
  newsList: NewsModel[] = []

  @Output()
  newsClick = new EventEmitter<NewsModel>()

  onNewsClick(news: NewsModel) {
    this.newsClick.emit(news)
  }
}
