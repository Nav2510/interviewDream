import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import { UrlPathEnum } from '../../enums/url-path.enum';
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
  @ViewChild('profileUpload') template: TemplateRef<ProfileMainInfoComponent>;

  file: File;
  uploadProgress;

  constructor(private readonly dialog: MatDialog) {}

  openProfilePicUpload(): void {
    const dialogData: DialogData<ProfileMainInfoComponent> = {
      showCloseBtn: true,
      showFooter: true,
      title: 'Change profile photo',
      cancelLabel: 'cancel',
      submitLabel: 'upload',
      template: this.template,
    };
    this.dialog.open(DialogComponent, {
      width: '50%',
      data: dialogData,
    });
  }

  onFileChanged(file: File): void {
    this.file = file;
  }
}
