import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogData } from './models/dialog-data.model';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent<T> {
  constructor(
    private readonly dialogService: DialogService,
    private readonly dialogRef: MatDialogRef<DialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA) readonly data: DialogData<T>,
  ) {}

  onSubmit(): void {
    this.dialogService.submit();
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogService.cancel();
    this.dialogRef.close();
  }
}
