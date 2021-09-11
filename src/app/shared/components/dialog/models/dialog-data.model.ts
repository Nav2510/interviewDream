import { TemplateRef } from '@angular/core';

export interface DialogData<T> {
  title: string;
  showCloseBtn: boolean;
  showFooter: boolean;
  submitLabel: string;
  cancelLabel: string;
  template?: TemplateRef<T>;
}
