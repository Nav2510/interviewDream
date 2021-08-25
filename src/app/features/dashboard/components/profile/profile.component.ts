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
import { UserInputData } from '../../../../../graphql/generated/graphql.types';

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

  constructor(
    private readonly route: ActivatedRoute,
    private readonly profileSubInfoGQL: ProfileSubInfoGQL,
    private readonly updateProfileGQL: UpdateProfileGQL,
    private readonly adapter: ProfileInfoCardAdapter,
  ) {}

  ngOnInit(): void {
    this.profile$ = this.profileSubInfoGQL.fetch().pipe(
      map((response) => {
        const mappedProfile: { [key: string]: ProfileInfoCardModel } = {};
        const profile = response.data.profile;
        const profileSubKeys = Object.keys(profile);

        profileSubKeys.forEach((key) => {
          mappedProfile[key] = this.adapter.adapt(profile[key], {
            title: key,
          });
        });
        return mappedProfile;
      }),
    );
  }

  onSave(formValue: { [key: string]: { [key: string]: any } }): void {
    this.profile$ = this.updateProfileGQL
      .mutate({ profileInput: formValue as UserInputData })
      .pipe(
        map((response) => {
          const mappedProfile: { [key: string]: ProfileInfoCardModel } = {};
          const profile = response.data.updateUserProfile;
          const profileSubKeys = Object.keys(profile);

          profileSubKeys.forEach((key) => {
            mappedProfile[key] = this.adapter.adapt(profile[key], {
              title: key,
            });
          });
          return mappedProfile;
        }),
      );
  }
}
