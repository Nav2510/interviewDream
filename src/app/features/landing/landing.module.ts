import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { CardModule } from '../../shared/components/card/card.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, CardModule, RouterModule.forChild(routes)],
  exports: [LandingComponent],
})
export class LandingModule {}
