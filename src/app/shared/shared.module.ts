import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CardComponent } from './components/card/card.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

import { MaterialModule } from './material.module';

const COMPONENTS = [
  AdvanceSearchComponent,
  BreadcrumbsComponent,
  CardComponent,
  DynamicFormComponent,
  InfoCardComponent,
  QuestionCardComponent,
  SideNavComponent,
  StarRatingComponent,
  TopNavComponent,
];
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [COMPONENTS],
})
export class SharedModule {}
