import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ICardModel } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: ICardModel;
  @Input() animations: boolean;

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate([this.card.link]);
  }
}
