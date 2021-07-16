import { Component } from '@angular/core';

import { CardModel } from '../../shared/components/card/card.model';
import { COURSES } from '../../shared/mocks/courses';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  // eslint-disable-next-line no-magic-numbers
  courses: CardModel[] = COURSES.slice(0, 5);
}
