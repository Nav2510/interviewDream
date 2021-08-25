import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-main-info',
  templateUrl: './profile-main-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileMainInfoComponent {
  @Input() showEdit: boolean;
}
