import { Component } from '@angular/core';
import { BannerModel } from 'projects/app/src/app/shared/models/banner.model';
import { NewsModel } from '../../models/news.model';

@Component({
  selector: 'app-screen-home',
  templateUrl: './screen-home.component.html',
  styleUrls: ['./screen-home.component.scss']
})
export class ScreenHomeComponent {

  newsList: NewsModel[] = [
    {
      title: 'Spacex successfully launches 60 Starlink satellites',
      description: 'SpaceX successfully launched 60 Starlink satellites into orbit on Monday, marking the company’s 100th successful launch.',
      image: 'https://images.unsplash.com/photo-1542282088-2e501f857c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'NASA’s Mars helicopter Ingenuity successfully makes historic first flight',
      description: 'NASA’s Mars helicopter Ingenuity has made its historic first flight on the Red Planet.',
      image: 'https://images.unsplash.com/photo-1618315206935-6b4f7d7b8b3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'NASA’s Perseverance Mars rover extracts first oxygen from Red Planet',
      description: 'NASA’s Perseverance Mars rover has extracted the first oxygen from the Red Planet, marking a major milestone in the search for life on Mars.',
      image: 'https://images.unsplash.com/photo-1618315206935-6b4f7d7b8b3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ]
}
