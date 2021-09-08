import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';

import { ProfileMainInfoComponent } from './profile-main-info.component';
import { DialogModule } from '../dialog/dialog.module';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AvatarModule } from '../avatar/avatar.module';

const COMPONENTS = [ProfileMainInfoComponent, FileUploadComponent];

const MATERIALS = [MatIconModule, MatProgressBarModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    AvatarModule,
    ...MATERIALS,
  ],
  exports: [...COMPONENTS],
})
export class ProfileMainInfoModule {}
