import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CardModel } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card: CardModel;
  @Input() animations: boolean;

  // eslint-disable-next-line no-unused-vars
  constructor(private readonly router: Router) {}

  onClick(): void {
    this.router.navigate([this.card.link]);
  }
}
