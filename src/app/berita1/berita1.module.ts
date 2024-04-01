import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Berita1PageRoutingModule } from './berita1-routing.module';

import { Berita1Page } from './berita1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Berita1PageRoutingModule
  ],
  declarations: [Berita1Page]
})
export class Berita1PageModule {}
