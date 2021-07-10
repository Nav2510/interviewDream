import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMainInfoComponent } from './profile-main-info.component';

import { MatIconModule } from '@angular/material/icon';

const MATERIALS = [MatIconModule];

@NgModule({
  declarations: [ProfileMainInfoComponent],
  imports: [CommonModule, ...MATERIALS],
  exports: [ProfileMainInfoComponent],
})
export class ProfileMainInfoModule {}
