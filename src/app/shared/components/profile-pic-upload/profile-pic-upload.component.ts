import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { AuthService } from 'src/app/core/services/auth.service';
import { UrlPathEnum } from 'src/app/shared/enums/url-path.enum';
import { environment } from 'src/environments/environment';
import { UserImageGQL } from '../../../../graphql/documents/queries/users/user-image.graphql-gen';
import { DialogService } from '../dialog/services/dialog.service';
import { ProfilePicUploadService } from './services/profile-pic-upload.service';

@Component({
  selector: 'app-profile-pic-upload',
  templateUrl: './profile-pic-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePicUploadComponent implements OnInit, OnDestroy {
  @Output() fileChanged = new EventEmitter<File>();

  file: File;
  uploadImageSrc = '';

  private subscription = new Subscription();

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly http: HttpClient,
    private readonly authService: AuthService,
    private readonly dialogService: DialogService,
    private readonly profilePicUploadService: ProfilePicUploadService,
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.dialogService.submitClicked$.subscribe(() => {
        this.onUpload();
      }),
    );
  }

  onFileChanged(event): void {
    this.file = event.target.files[0];
    this.readFile();
  }

  onUpload(): void {
    const formData = new FormData();
    formData.append('image', this.file, this.file?.name);
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      }),
    };
    this.http
      .put(
        `${environment.baseURI}${UrlPathEnum.UPLOAD_PROFILE}`,
        formData,
        options,
      )
      .pipe(take(1))
      .subscribe((response: { filePath: string; message: string }) => {
        const filePath = response.filePath;
        this.profilePicUploadService.fileChanged$.next(filePath);
      });
  }

  onFileDropped(file: File): void {
    this.file = file;
    this.readFile();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private readFile(): void {
    if (this.file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.uploadImageSrc = reader.result as string;
        this.fileChanged.next(this.file);
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(this.file);
    }
  }
}
