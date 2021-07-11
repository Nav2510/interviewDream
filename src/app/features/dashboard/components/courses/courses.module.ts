import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CardModule } from '../../../../shared/components/card/card.module';
import { AdvanceSearchModule } from '../../../../shared/components/advance-search/advance-search.module';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
];

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    AdvanceSearchModule,
    CommonModule,
    CardModule,
    RouterModule.forChild(routes),
  ],
})
export class CoursesModule {}
