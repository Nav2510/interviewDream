import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSelectorCardComponent } from './account-selector-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AccountSelectorCardComponent }];

@NgModule({
  declarations: [AccountSelectorCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountSelectorCardModule {}
