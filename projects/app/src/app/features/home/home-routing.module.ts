import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenHomeComponent } from './screens/screen-home/screen-home.component';

const routes: Routes = [
  { path: '', component: ScreenHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
