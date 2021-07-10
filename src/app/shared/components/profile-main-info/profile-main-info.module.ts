import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMainInfoComponent } from './profile-main-info.component';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

const MATERIALS = [MatIconModule, MatButtonModule];

@NgModule({
  declarations: [ProfileMainInfoComponent],
  imports: [CommonModule, ...MATERIALS],
  exports: [ProfileMainInfoComponent],
})
export class ProfileMainInfoModule {}
