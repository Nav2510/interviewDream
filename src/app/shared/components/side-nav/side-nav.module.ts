import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { SideNavComponent } from './side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const MATERIALS = [MatIconModule, MatExpansionModule];

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, RouterModule, ...MATERIALS],
  exports: [SideNavComponent],
})
export class SideNavModule {}
