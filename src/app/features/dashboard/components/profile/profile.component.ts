import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PROFILE } from '../../../../shared/mocks/profile';
import {
  ProfileInfoCardAdapter,
  ProfileInfoCardModel,
} from '../../../../shared/components/profile-info-card/profile-info-card.model';
import { ProfileSubInfoGQL } from '../../../../../graphql/documents/queries/profiles/profile-sub-info.graphql-gen';
import { UpdateProfileGQL } from '../../../../../graphql/documents/mutations/profiles/update-profile.graphql-gen';
import {
  Profile,
  Score,
  UserInputData,
} from '../../../../../graphql/generated/graphql.types';
import { GetScoreGQL } from '../../../../../graphql/documents/queries/profiles/get-score.graphql-gen';
import { ProfileMainInfoGQL } from '../../../../../graphql/documents/queries/profiles/profile-main-info.graphql-gen';
import {
  MainInfoAdapter,
  MainInfoModel,
} from '../../../../shared/components/profile-main-info/main-info.model';

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
  profileMainInfo$: Observable<MainInfoModel> = this.mainInfoGQL
    .fetch()
    .pipe(map((response) => this.mainInfoAdapter.adapt(response.data.profile)));
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
  ) {}

  ngOnInit(): void {
    this.profile$ = this.profileSubInfoGQL
      .fetch()
      .pipe(map((response) => this.mapProfileData(response.data.profile)));
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
