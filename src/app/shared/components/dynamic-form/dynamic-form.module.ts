import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import { DynamicFormComponent } from './dynamic-form.component';

const MATERIALS = [
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
];

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, ...MATERIALS],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
