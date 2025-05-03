import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovalAdminPageRoutingModule } from './approval-admin-routing.module';

import { ApprovalAdminPage } from './approval-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovalAdminPageRoutingModule
  ],
  declarations: [ApprovalAdminPage]
})
export class ApprovalAdminPageModule {}
