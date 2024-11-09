import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InfoComponent } from './components/info/info.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { ScreenExploreComponent } from './screens/screen-explore/screen-explore.component';

@NgModule({
  declarations: [
    ScreenExploreComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExploreRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ExploreModule { }
