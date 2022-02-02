import { ChangeDetectionStrategy, Component } from '@angular/core';
import {environment} from '../../../../../environments/environment'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  bannerImage = `${environment.firebaseStorageURI}landing-banner.png`;
  imageList = [
    `${environment.firebaseStorageURI}1.jpg`,
    `${environment.firebaseStorageURI}2.jpg`,
    `${environment.firebaseStorageURI}3.jpg`,
  ];

  onShowMore(): void {
    // TODO: Fixed navigation issue
    window.location.hash = '#aboutInterview';
  }
}
