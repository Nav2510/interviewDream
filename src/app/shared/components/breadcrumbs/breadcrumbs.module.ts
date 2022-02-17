import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbsComponent } from './breadcrumbs.component';

const MATERIALS = [MatIconModule];

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, RouterModule, ...MATERIALS, TranslateModule],
  exports: [BreadcrumbsComponent],
})
export class BreadcrumbsModule {}
