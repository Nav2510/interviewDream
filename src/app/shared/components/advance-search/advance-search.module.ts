import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AdvanceSearchComponent } from './advance-search.component';

const MATERIALS = [
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [AdvanceSearchComponent],
  imports: [CommonModule, ReactiveFormsModule, ...MATERIALS],
  exports: [AdvanceSearchComponent],
})
export class AdvanceSearchModule {}
