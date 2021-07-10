import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PaperComponent } from './paper.component';
import { StarRatingModule } from '../../../../shared/components/star-rating/star-rating.module';
import { DynamicFormModule } from '../../../../shared/components/dynamic-form/dynamic-form.module';
import { QuestionCardModule } from '../../../../shared/components/question-card/question-card.module';

const routes: Routes = [
  {
    path: '',
    component: PaperComponent,
  },
];

@NgModule({
  declarations: [PaperComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
    QuestionCardModule,
    RouterModule.forChild(routes),
    StarRatingModule,
  ],
})
export class PaperModule {}
