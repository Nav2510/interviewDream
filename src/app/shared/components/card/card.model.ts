import { Injectable } from '@angular/core';

import { Adapter } from '../../../core/adapter';

/* eslint-disable no-unused-vars */
export class CardModel {
  constructor(
    public imagePath: string,
    public description: string,
    public title: string,
    public price: number,
    public tagList: string[],
    public link: string,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class CardAdapter implements Adapter<CardModel> {
  adapt(item: any): CardModel {
    return new CardModel(
      item.bgImagePath,
      item.description,
      item.title,
      item.price,
      item.tags,
      '/dashboard/papers',
    );
  }
}
