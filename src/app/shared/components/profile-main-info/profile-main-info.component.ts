import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MainInfoModel } from './main-info.model';

@Component({
  selector: 'app-profile-main-info',
  templateUrl: './profile-main-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileMainInfoComponent {
  @Input() showEdit: boolean;
  @Input() profileData: MainInfoModel;
}
