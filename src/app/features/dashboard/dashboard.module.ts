import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProfileComponent,
    ],
    imports: [
        DashboardRoutingModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        SharedModule,
    ]
})
export class DashboardModule {

}
