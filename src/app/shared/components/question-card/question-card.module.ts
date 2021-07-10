import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { QuestionCardComponent } from './question-card.component';

const MATERIALS = [
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [QuestionCardComponent],
  imports: [CommonModule, FormsModule, ...MATERIALS],
  exports: [QuestionCardComponent],
})
export class QuestionCardModule {}
