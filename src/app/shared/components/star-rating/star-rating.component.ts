import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { StarRatingTypeEnum } from './star-rating-type.enum';

const TOTAL_STARS = 5;
@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;
  // TODO: Add edit functionality
  // @Input() edit: boolean;
  starList: string[];

  ngOnInit() {
    this.starList = this.createList(this.rating);
  }

  createList(rating: number): string[] {
    const starList: string[] = [];
    const completeStar: number = Math.floor(rating);
    const hasHalfStar: boolean = rating % completeStar !== 0;
    const emptyStar: number = Math.floor(TOTAL_STARS - rating);
    for (let i = 0; i < completeStar; i++) {
      starList.push(StarRatingTypeEnum.Complete);
    }
    if (hasHalfStar) {
      starList.push(StarRatingTypeEnum.Half);
    }
    for (let i = 0; i < emptyStar; i++) {
      starList.push(StarRatingTypeEnum.Empty);
    }
    return starList;
  }
}
