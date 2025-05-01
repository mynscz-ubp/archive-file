import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'document',
    loadChildren: () =>
      import('./document/document.module').then((m) => m.DocumentPageModule),
  },
  {
    path: 'approval',
    loadChildren: () =>
      import('./approval/approval.module').then((m) => m.ApprovalPageModule),
  },
  {
    path: 'discuss',
    loadChildren: () =>
      import('./discuss/discuss.module').then((m) => m.DiscussPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'template',
    loadChildren: () =>
      import('./template/template.module').then((m) => m.TemplatePageModule),
  },
  {
    path: 'pengajuan',
    loadChildren: () =>
      import('./pengajuan/pengajuan.module').then((m) => m.PengajuanPageModule),
  },
  {
    path: 'ajukan/:type',
    loadChildren: () =>
      import('./ajukan/ajukan.module').then((m) => m.AjukanPageModule),
  },
  {
    path: 'success',
    loadChildren: () =>
      import('./success/success.module').then((m) => m.SuccessPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
