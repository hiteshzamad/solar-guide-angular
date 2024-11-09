import { Component } from '@angular/core';
import { FactModel } from '../../../../core/models/fact.model';
import { NewsModel } from '../../../../core/models/news.model';
import { NewsService } from 'projects/app/src/app/core/services/news.service';
import { FactService } from 'projects/app/src/app/core/services/fact.service';

@Component({
  selector: 'app-screen-home',
  templateUrl: './screen-home.component.html',
  styleUrls: ['./screen-home.component.scss']
})
export class ScreenHomeComponent {

  newsList: NewsModel[]

  factList: FactModel[]

  constructor(private newsService: NewsService, private factService: FactService) {
    this.newsList = newsService.newsList
    this.factList = factService.factList
  }

  onNewsClick(data: any) {
    window.open(data.link, '_blank')
  }
}
