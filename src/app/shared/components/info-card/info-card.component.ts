import { Component, Input, OnInit } from '@angular/core';

import { InfoCardTypeEnum } from '../../enums/info-card-type.enum';
import { IInfoCardModel } from '../../models/info-card.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() cardInfo: IInfoCardModel
  @Input() cardType: InfoCardTypeEnum
  @Input() animations: boolean

  constructor() { }

  ngOnInit() {
  }

}
