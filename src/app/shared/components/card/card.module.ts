import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CardComponent } from './card.component';

const MATERIALS = [MatCardModule, MatTooltipModule];

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ...MATERIALS],
  exports: [CardComponent],
})
export class CardModule {}
