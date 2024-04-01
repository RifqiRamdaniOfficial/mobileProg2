import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Berita2Page } from './berita2.page';

const routes: Routes = [
  {
    path: '',
    component: Berita2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Berita2PageRoutingModule {}
