import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { ProfileMainInfoComponent } from './profile-main-info.component';
import { DialogModule } from '../dialog/dialog.module';
import { AvatarModule } from '../avatar/avatar.module';
import { DragAndDropModule } from '../../directives/drag-and-drop/drag-and-drop.module';
import { ProfilePicUploadModule } from '../profile-pic-upload/profile-pic-upload.module';

const COMPONENTS = [ProfileMainInfoComponent];

const MATERIALS = [MatIconModule, MatProgressBarModule, MatButtonModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    AvatarModule,
    CommonModule,
    DialogModule,
    DragAndDropModule,
    HttpClientModule,
    ProfilePicUploadModule,
    ReactiveFormsModule,
    ...MATERIALS,
  ],
  exports: [...COMPONENTS],
})
export class ProfileMainInfoModule {}
