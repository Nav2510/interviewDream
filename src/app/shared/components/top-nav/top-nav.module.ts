import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { TopNavComponent } from './top-nav.component';

const MATERIALS = [MatMenuModule, MatIconModule];

@NgModule({
  declarations: [TopNavComponent],
  imports: [CommonModule, ...MATERIALS],
  exports: [TopNavComponent],
})
export class TopNavModule {}
