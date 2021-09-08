import { TemplateRef } from '@angular/core';

export interface DialogData<T> {
  title: string;
  showCloseBtn: boolean;
  submitLabel: string;
  cancelLabel: string;
  submitMethod?: () => any;
  cancelMethod?: () => any;
  content?: string;
  template?: TemplateRef<T>;
}
