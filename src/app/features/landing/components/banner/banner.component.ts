import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  bannerImage = '../../../../../assets/images/banners/landing-banner.png';
  imageList = [
    '../../../../../assets/images/bgImages/1.jpg',
    '../../../../../assets/images/bgImages/2.jpg',
    '../../../../../assets/images/bgImages/3.jpg',
  ];

  onShowMore(): void {
    // TODO: Fixed navigation issue
    window.location.hash = '#aboutInterview';
  }
}
