import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { DialogComponent } from './dialog.component';

const COMPONENTS = [DialogComponent];

const MATERIALS = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MATERIALS],
  exports: [...COMPONENTS],
})
export class DialogModule {}
