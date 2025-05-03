import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NosuratPageRoutingModule } from './nosurat-routing.module';

import { NosuratPage } from './nosurat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosuratPageRoutingModule
  ],
  declarations: [NosuratPage]
})
export class NosuratPageModule {}
