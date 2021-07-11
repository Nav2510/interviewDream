import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PapersComponent } from './papers.component';
import { InfoCardModule } from '../../../../shared/components/info-card/info-card.module';
import { AdvanceSearchModule } from '../../../../shared/components/advance-search/advance-search.module';

const routes: Routes = [
  {
    path: '',
    component: PapersComponent,
  },
];
@NgModule({
  declarations: [PapersComponent],
  imports: [
    AdvanceSearchModule,
    CommonModule,
    InfoCardModule,
    RouterModule.forChild(routes),
  ],
})
export class PapersModule {}
