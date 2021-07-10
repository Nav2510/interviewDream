import { Component } from '@angular/core';

import { CardModel } from '../../shared/components/card/card.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  items: CardModel[] = [
    {
      description:
        'angular as a framework, learn about all features of Angular',
      title: 'angular',
      imagePath: 'assets/images/bgImages/7.jpg',
      price: 12.0,
      tagList: ['hot', 'new', 'feactured'],
      link: '/courses',
    },
  ];
}
