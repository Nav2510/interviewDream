import { ChangeDetectionStrategy, Component } from '@angular/core';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeComponent {
  readonly subscribeURI = `${environment.firebaseStorageURI}subscribe.png`;
}
