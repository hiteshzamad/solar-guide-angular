import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FactComponent } from './components/fact/fact.component';
import { IntroComponent } from './components/intro/intro.component';
import { NewsComponent } from './components/news/news.component';
import { HomeRoutingModule } from './home-routing.module';
import { ScreenHomeComponent } from './screens/screen-home/screen-home.component';

@NgModule({
  declarations: [
    ScreenHomeComponent,
    IntroComponent,
    NewsComponent,
    FactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  schemas :[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
