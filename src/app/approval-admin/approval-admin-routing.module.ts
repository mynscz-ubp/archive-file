import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovalAdminPage } from './approval-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovalAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovalAdminPageRoutingModule {}
