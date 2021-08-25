import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PROFILE } from '../../../../shared/mocks/profile';
import { ProfileInfoCardModel } from '../../../../shared/components/profile-info-card/profile-info-card.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  summary: ProfileInfoCardModel = PROFILE.summary;
  basic: ProfileInfoCardModel = PROFILE.basic;
  additional: ProfileInfoCardModel = PROFILE.additional;
  contact: ProfileInfoCardModel = PROFILE.contact;
  education: ProfileInfoCardModel = PROFILE.education;
  queryParams$: Observable<Params> = this.route.queryParams;

  constructor(private readonly route: ActivatedRoute) {}
}
