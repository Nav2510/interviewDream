import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitlecasePipe } from './titlecase.pipe';

@NgModule({
  declarations: [
    TitlecasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [TitlecasePipe]
})
export class TitlecaseModule { }
