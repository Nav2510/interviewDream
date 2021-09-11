import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { ProfileMainInfoComponent } from './profile-main-info.component';
import { DialogModule } from '../dialog/dialog.module';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AvatarModule } from '../avatar/avatar.module';
import { DragAndDropModule } from '../../directives/drag-and-drop/drag-and-drop.module';

const COMPONENTS = [ProfileMainInfoComponent, FileUploadComponent];

const MATERIALS = [MatIconModule, MatProgressBarModule, MatButtonModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    AvatarModule,
    CommonModule,
    DialogModule,
    DragAndDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...MATERIALS,
  ],
  exports: [...COMPONENTS],
})
export class ProfileMainInfoModule {}
