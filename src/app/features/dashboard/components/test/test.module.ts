import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { TestComponent } from './test.component';
import { StarRatingModule } from '../../../../shared/components/star-rating/star-rating.module';
import { DynamicFormModule } from '../../../../shared/components/dynamic-form/dynamic-form.module';
import { QuestionCardModule } from '../../../../shared/components/question-card/question-card.module';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  },
];

const MATERIALS = [MatButtonModule];

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
    QuestionCardModule,
    StarRatingModule,
    RouterModule.forChild(routes),
    ...MATERIALS,
  ],
})
export class TestModule {}
