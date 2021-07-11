import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TopNavComponent } from './top-nav.component';

const MATERIALS = [MatMenuModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [TopNavComponent],
  imports: [CommonModule, ...MATERIALS],
  exports: [TopNavComponent],
})
export class TopNavModule {}
