import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfilePicUploadService {
  readonly fileChanged$ = new EventEmitter<string>();
}
