import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountSelectorCardComponent } from './components/account-selector-card/account-selector-card.component';
import { LoginSignupCardComponent } from './components/login-signup-card/login-signup-card.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginSignupCardComponent,
      },
      {
        path: 'select-account',
        component: AccountSelectorCardComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
