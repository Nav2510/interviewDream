import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { InfoCardComponent } from './info-card.component';
import { StarRatingModule } from '../star-rating/star-rating.module';

@NgModule({
  declarations: [InfoCardComponent],
  imports: [CommonModule, RouterModule, StarRatingModule, TranslateModule],
  exports: [InfoCardComponent],
})
export class InfoCardModule {}
