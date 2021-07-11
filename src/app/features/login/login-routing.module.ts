import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import(
            './components/login-signup-card/login-signup-card.module'
          ).then((module) => module.LoginSignupCardModule),
      },
      {
        path: 'select-account',
        loadChildren: () =>
          import(
            './components/account-selector-card/account-selector-card.module'
          ).then((module) => module.AccountSelectorCardModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
