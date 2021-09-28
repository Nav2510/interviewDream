import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { Courses } from '../../../../graphql/generated/graphql.types';
import { Adapter } from '../../../core/adapter';

/* eslint-disable no-unused-vars */
export class CardModel {
  constructor(
    public imagePath: string,
    public description: string,
    public title: string,
    public price: number,
    public tags: string[],
    public categories: string[],
    public author: string,
    public link: string,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class CardAdapter implements Adapter<CardModel> {
  adapt(item: Courses): CardModel {
    return new CardModel(
      item.bgImagePath,
      item.description,
      item.title,
      item.price,
      item.tags,
      item.categories,
      item.author,
      `/dashboard/courses/${item._id}`,
    );
  }
}
