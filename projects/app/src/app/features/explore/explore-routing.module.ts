import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenExploreComponent } from './screens/screen-explore/screen-explore.component';
import { ScreenCelestialComponent } from './screens/screen-celestial/screen-celestial.component';

const routes: Routes = [
  { path: '', component: ScreenExploreComponent },
  { path: ':id', component: ScreenCelestialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
