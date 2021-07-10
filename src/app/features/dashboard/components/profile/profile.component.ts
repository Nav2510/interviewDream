import { Component } from '@angular/core';

import { profile } from '../../../../shared/mocks/profile';
import { ProfileInfoCardModel } from '../../../../shared/components/profile-info-card/profile-info-card.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  summary: ProfileInfoCardModel = profile.summary;
  basic: ProfileInfoCardModel = profile.basic;
  additional: ProfileInfoCardModel = profile.additional;
  contact: ProfileInfoCardModel = profile.contact;
  education: ProfileInfoCardModel = profile.education;
}
