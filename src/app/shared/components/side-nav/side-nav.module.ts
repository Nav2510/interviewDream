import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SideNavComponent } from './side-nav.component';

const MATERIALS = [MatIconModule, MatExpansionModule];

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, RouterModule, ...MATERIALS, TranslateModule],
  exports: [SideNavComponent],
})
export class SideNavModule {}
