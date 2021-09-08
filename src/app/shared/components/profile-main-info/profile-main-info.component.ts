import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

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

  fileName: string;
  uploadProgress;

  constructor(private readonly dialog: MatDialog) {}

  openProfilePicUpload(): void {
    const dialogData: DialogData<ProfileMainInfoComponent> = {
      showCloseBtn: true,
      title: 'update profile photo',
      cancelLabel: 'cancel',
      submitLabel: 'upload',
      content: 'this is content',
      template: this.template,
      submitMethod: this.onUpload,
    };
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '60%',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(result);
      // console.log('The dialog was closed');
    });
  }

  onUpload(): void {
    // console.log('on upload');
  }
}
