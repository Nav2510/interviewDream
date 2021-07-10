import { Component } from '@angular/core'

import { profile } from '../../../../shared/mocks/profile'
import { IProfileInfoCardModel } from '../../../../shared/models/profile-info-card.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  summary: IProfileInfoCardModel = profile.summary
  basic: IProfileInfoCardModel = profile.basic
  additional: IProfileInfoCardModel = profile.additional
  contact: IProfileInfoCardModel = profile.contact
  education: IProfileInfoCardModel = profile.education
}
