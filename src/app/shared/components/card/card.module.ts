import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { CardComponent } from './card.component';

const MATERIALS = [MatCardModule];

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ...MATERIALS],
  exports: [CardComponent],
})
export class CardModule {}
