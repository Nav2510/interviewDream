import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { SideNavComponent } from './side-nav.component';
import { MatIconModule } from '@angular/material/icon';

const MATERIALS = [MatIconModule, MatExpansionModule];

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, ...MATERIALS],
  exports: [SideNavComponent],
})
export class SideNavModule {}
