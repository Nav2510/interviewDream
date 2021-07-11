import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing/landing.module').then(
        (module) => module.LandingModule,
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/login/login.module').then(
        (module) => module.LoginModule,
      ),
  },
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (module) => module.DashboardModule,
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
