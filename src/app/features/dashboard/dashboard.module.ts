import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TopNavModule } from '../../shared/components/top-nav/top-nav.module';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideNavModule } from '../../shared/components/side-nav/side-nav.module';

const MATERIALS = [MatSidenavModule];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BreadcrumbsModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SideNavModule,
    TopNavModule,
    ...MATERIALS,
  ],
})
export class DashboardModule {}
