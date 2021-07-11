import { Component } from '@angular/core';

import { PROFILE } from '../../../../shared/mocks/profile';
import { ProfileInfoCardModel } from '../../../../shared/components/profile-info-card/profile-info-card.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  summary: ProfileInfoCardModel = PROFILE.summary;
  basic: ProfileInfoCardModel = PROFILE.basic;
  additional: ProfileInfoCardModel = PROFILE.additional;
  contact: ProfileInfoCardModel = PROFILE.contact;
  education: ProfileInfoCardModel = PROFILE.education;
}
