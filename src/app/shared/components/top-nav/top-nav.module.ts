import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TopNavComponent } from './top-nav.component';
import { NavbarActionsModule } from '../navbar-actions/navbar-actions.module';

const MATERIALS = [MatMenuModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [TopNavComponent],
  imports: [CommonModule, NavbarActionsModule, ...MATERIALS],
  exports: [TopNavComponent],
})
export class TopNavModule {}
