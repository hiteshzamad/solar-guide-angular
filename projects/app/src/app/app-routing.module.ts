import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import(`./features/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'explore',
    loadChildren: () => import(`./features/explore/explore.module`).then(m => m.ExploreModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
