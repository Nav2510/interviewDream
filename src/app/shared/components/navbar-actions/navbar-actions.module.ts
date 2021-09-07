import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { NavbarActionsComponent } from './navbar-actions.component';

const COMPONENTS = [NavbarActionsComponent];

const MATERIAL = [MatButtonModule, MatMenuModule, MatIconModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MATERIAL],
  exports: [...COMPONENTS],
})
export class NavbarActionsModule {}
