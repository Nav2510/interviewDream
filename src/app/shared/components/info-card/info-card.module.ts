import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCardComponent } from './info-card.component';
import { StarRatingModule } from '../star-rating/star-rating.module';

@NgModule({
  declarations: [InfoCardComponent],
  imports: [CommonModule, StarRatingModule],
  exports: [InfoCardComponent],
})
export class InfoCardModule {}
