import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { UrlPathEnum } from 'src/app/shared/enums/url-path.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
  file: any;

  // uploadProgress;

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService,
  ) {}

  onFileChanged(event): void {
    this.file = event.target.files[0];
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
      .subscribe((response) => {
        console.log(response);
      });
  }

  cancelUpload(): void {}
}
