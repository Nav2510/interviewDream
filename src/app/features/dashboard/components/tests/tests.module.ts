import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InfoCardModule } from '../../../../shared/components/info-card/info-card.module';
import { TestsComponent } from './tests.component';
import { AdvanceSearchModule } from '../../../../shared/components/advance-search/advance-search.module';

const routes: Routes = [
  {
    path: '',
    component: TestsComponent,
  },
];
@NgModule({
  declarations: [TestsComponent],
  imports: [
    CommonModule,
    InfoCardModule,
    AdvanceSearchModule,
    RouterModule.forChild(routes),
  ],
})
export class TestsModule {}
