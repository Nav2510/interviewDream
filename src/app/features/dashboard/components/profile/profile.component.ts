import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { PROFILE } from '../../../../shared/mocks/profile';
import {
  ProfileInfoCardAdapter,
  ProfileInfoCardModel,
} from '../../../../shared/components/profile-info-card/profile-info-card.model';
import { ProfileSubInfoGQL } from '../../../../../graphql/documents/queries/profiles/profile-sub-info.graphql-gen';
import { UpdateProfileGQL } from '../../../../../graphql/documents/mutations/profiles/update-profile.graphql-gen';
import {
  Score,
  UserInputData,
} from '../../../../../graphql/generated/graphql.types';
import { GetScoreGQL } from '../../../../../graphql/documents/queries/profiles/get-score.graphql-gen';
import { ProfileMainInfoGQL } from '../../../../../graphql/documents/queries/profiles/profile-main-info.graphql-gen';
import {
  MainInfoAdapter,
  MainInfoModel,
} from '../../../../shared/components/profile-main-info/models/main-info.model';
import { ProfilePicUploadService } from '../../../../shared/components/profile-pic-upload/services/profile-pic-upload.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  summary: ProfileInfoCardModel = PROFILE.summary;
  queryParams$: Observable<Params> = this.route.queryParams;
  profile$: Observable<{ [key: string]: ProfileInfoCardModel }>;
  profileMainInfo$ = new BehaviorSubject<MainInfoModel>(null);
  score$: Observable<Score[]> = this.getScoreGQL
    .fetch()
    .pipe(map((response) => response.data.profile.interviewDreamScore));

  constructor(
    private readonly route: ActivatedRoute,
    private readonly profileSubInfoGQL: ProfileSubInfoGQL,
    private readonly updateProfileGQL: UpdateProfileGQL,
    private readonly mainInfoGQL: ProfileMainInfoGQL,
    private readonly profileInfoCardAdapter: ProfileInfoCardAdapter,
    private readonly mainInfoAdapter: MainInfoAdapter,
    private readonly getScoreGQL: GetScoreGQL,
    private readonly profilePicUploadService: ProfilePicUploadService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.profile$ = this.profileSubInfoGQL
      .fetch()
      .pipe(map((response) => this.mapProfileData(response.data.profile)));
    this.profilePicUploadService.fileChanged$.subscribe((userImagePath) => {
      const profilePath = userImagePath;
      const profileInfo = this.profileMainInfo$.getValue();
      const updatedProfileInfo: MainInfoModel = {
        ...profileInfo,
        profileSrc: profilePath,
      };
      this.profileMainInfo$.next(updatedProfileInfo);
    });
  }

  fetchData(): void {
    this.mainInfoGQL
      .fetch()
      .pipe(
        take(1),
        map((response) => this.mainInfoAdapter.adapt(response.data.profile)),
      )
      .subscribe((profileInfo) => {
        this.profileMainInfo$.next(profileInfo);
      });
  }

  onSave(formValue: { [key: string]: { [key: string]: any } }): void {
    if (formValue.summary) {
      formValue = formValue.summary;
    }
    this.profile$ = this.updateProfileGQL
      .mutate({ profileInput: formValue as UserInputData })
      .pipe(
        map((response) => this.mapProfileData(response.data.updateUserProfile)),
      );
  }

  private mapProfileData(profile: any): {
    [key: string]: ProfileInfoCardModel;
  } {
    const mappedProfile: { [key: string]: ProfileInfoCardModel } = {};
    const profileSubKeys = Object.keys(profile);

    profileSubKeys.forEach((key) => {
      mappedProfile[key] = this.profileInfoCardAdapter.adapt(profile[key], {
        title: key,
      });
    });
    mappedProfile.summary = this.profileInfoCardAdapter.adapt(
      {},
      {
        title: 'summary',
        summary: profile.summary,
      },
    );
    return mappedProfile;
  }
}
