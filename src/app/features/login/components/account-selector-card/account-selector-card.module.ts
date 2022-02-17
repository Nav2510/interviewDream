import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AccountSelectorCardComponent } from './account-selector-card.component';

const routes: Routes = [{ path: '', component: AccountSelectorCardComponent }];

@NgModule({
  declarations: [AccountSelectorCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule],
})
export class AccountSelectorCardModule {}
