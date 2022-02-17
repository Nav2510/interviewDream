import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { ProfilePicUploadComponent } from './profile-pic-upload.component';

const MATERIALS = [MatIconModule];

@NgModule({
  declarations: [ProfilePicUploadComponent],
  imports: [CommonModule, ...MATERIALS, TranslateModule],
  exports: [ProfilePicUploadComponent],
})
export class ProfilePicUploadModule {}
