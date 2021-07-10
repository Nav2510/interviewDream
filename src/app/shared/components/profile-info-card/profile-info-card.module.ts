import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ProfileInfoCardComponent } from './profile-info-card.component';

const MATERIALS = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [ProfileInfoCardComponent],
  imports: [CommonModule, ...MATERIALS, ReactiveFormsModule],
  exports: [ProfileInfoCardComponent],
})
export class ProfileInfoCardModule {}
