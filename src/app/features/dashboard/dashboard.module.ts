import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { CoursesComponent } from './components/courses/courses.component';
import { PaperComponent } from './components/paper/paper.component';
import { PapersComponent } from './components/papers/papers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TestComponent } from './components/test/test.component';
import { TestsComponent } from './components/tests/tests.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    CoursesComponent,
    DashboardComponent,
    ProfileComponent,
    PaperComponent,
    PapersComponent,
    TestComponent,
    TestsComponent,
  ],
  imports: [
    DashboardRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
})
export class DashboardModule {}
