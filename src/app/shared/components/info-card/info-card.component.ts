import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { InfoCardTypeEnum } from './info-card-type.enum';
import { InfoCardModel } from './info-card.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent {
  @Input() cardInfo: InfoCardModel;
  @Input() cardType: InfoCardTypeEnum;
  @Input() animations: boolean;
}
