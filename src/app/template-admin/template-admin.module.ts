import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateAdminPageRoutingModule } from './template-admin-routing.module';

import { TemplateAdminPage } from './template-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateAdminPageRoutingModule
  ],
  declarations: [TemplateAdminPage]
})
export class TemplateAdminPageModule {}
