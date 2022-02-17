import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { DialogComponent } from '../dialog/dialog.component';
import { DialogData } from '../dialog/models/dialog-data.model';
import { MainInfoModel } from './models/main-info.model';

@Component({
  selector: 'app-profile-main-info',
  templateUrl: './profile-main-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileMainInfoComponent {
  @Input() showEdit: boolean;
  @Input() profileData: MainInfoModel;
  @ViewChild('backgroundUpload')
  backgroundUploadTemplate: TemplateRef<ProfileMainInfoComponent>;
  @ViewChild('profileUpload')
  profileUploadTemplate: TemplateRef<ProfileMainInfoComponent>;

  file: File;

  constructor(
    private readonly dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  openProfilePicUpload(): void {
    const dialogData: DialogData<ProfileMainInfoComponent> = {
      showCloseBtn: true,
      showFooter: true,
      title: this.translateService.instant('shared.profileMainInfo.changeProfilePhoto'),
      cancelLabel: this.translateService.instant('shared.profileMainInfo.cancel'),
      submitLabel: this.translateService.instant('shared.profileMainInfo.upload'),
      template: this.profileUploadTemplate,
    };
    this.dialog.open(DialogComponent, {
      width: '50%',
      data: dialogData,
    });
  }

  openBackgroundUpload(): void {
    const dialogData: DialogData<ProfileMainInfoComponent> = {
      showCloseBtn: true,
      showFooter: true,
      title: 'Change background photo',
      cancelLabel: 'cancel',
      submitLabel: 'Change Photo',
      template: this.profileUploadTemplate,
    };
    this.dialog.open(DialogComponent, {
      width: '60%',
      data: dialogData,
    });
  }

  onFileChanged(file: File): void {
    this.file = file;
  }
}
