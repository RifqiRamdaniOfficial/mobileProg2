import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Berita2PageRoutingModule } from './berita2-routing.module';

import { Berita2Page } from './berita2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Berita2PageRoutingModule
  ],
  declarations: [Berita2Page]
})
export class Berita2PageModule {}
