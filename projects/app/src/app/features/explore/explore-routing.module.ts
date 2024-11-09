import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenExploreComponent } from './screens/screen-explore/screen-explore.component';

const routes: Routes = [
  { path: '', component: ScreenExploreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
