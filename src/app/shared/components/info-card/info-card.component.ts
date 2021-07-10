import { Component, Input } from '@angular/core';

import { InfoCardTypeEnum } from '../../enums/info-card-type.enum';
import { IInfoCardModel } from '../../models/info-card.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() cardInfo: IInfoCardModel
  @Input() cardType: InfoCardTypeEnum
  @Input() animations: boolean
}
