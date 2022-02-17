import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ProfileInfoCardComponent } from './profile-info-card.component';
import { TitlecaseModule } from '../../pipes/titlecase/titlecase.module';

const MATERIALS = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [ProfileInfoCardComponent],
  imports: [CommonModule, ...MATERIALS, ReactiveFormsModule, TitlecaseModule],
  exports: [ProfileInfoCardComponent],
})
export class ProfileInfoCardModule {}
