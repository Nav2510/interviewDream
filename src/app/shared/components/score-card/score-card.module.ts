import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ScoreCardComponent } from './score-card.component';

const MATERIALS = [MatProgressBarModule];

@NgModule({
  declarations: [ScoreCardComponent],
  imports: [CommonModule, ...MATERIALS],
  exports: [ScoreCardComponent],
})
export class ScoreCardModule {}
