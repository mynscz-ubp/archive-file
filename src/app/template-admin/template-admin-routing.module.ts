import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateAdminPage } from './template-admin.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateAdminPageRoutingModule {}
