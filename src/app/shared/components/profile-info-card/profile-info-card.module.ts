import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ProfileInfoCardComponent } from './profile-info-card.component';

const MATERIALS = [MatIconModule, MatFormFieldModule];

@NgModule({
  declarations: [ProfileInfoCardComponent],
  imports: [CommonModule, ...MATERIALS, ReactiveFormsModule],
  exports: [ProfileInfoCardComponent],
})
export class ProfileInfoCardModule {}
