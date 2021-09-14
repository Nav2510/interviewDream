import { TestBed } from '@angular/core/testing';

import { ProfilePicUploadService } from './profile-pic-upload.service';

describe('ProfilePicUploadService', () => {
  let service: ProfilePicUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilePicUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
