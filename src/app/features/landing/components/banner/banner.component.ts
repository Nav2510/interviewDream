import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  bannerImage = '../../../../../assets/images/banners/landing-banner.png';
  imageList = [
    '../../../../../assets/images/bgImages/2.jpg',
    '../../../../../assets/images/bgImages/12.jpg',
    '../../../../../assets/images/bgImages/18.jpg',
  ];
}
