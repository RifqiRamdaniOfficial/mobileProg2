import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Berita1Page } from './berita1.page';

const routes: Routes = [
  {
    path: '',
    component: Berita1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Berita1PageRoutingModule {}
