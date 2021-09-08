import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogData } from './models/dialog-data.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent<T> {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<T>,
  ) {}

  onSubmit(): void {
    this.data.submitMethod();
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
