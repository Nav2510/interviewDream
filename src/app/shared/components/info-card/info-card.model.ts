import { Injectable } from '@angular/core';
import { Papers } from '../../../../graphql/generated/graphql.types';
import { Adapter, AdapterOptions } from '../../../core/adapter';

/* eslint-disable no-unused-vars */
export class InfoCardModel {
  constructor(
    public id: string,
    public label: string,
    public description: string,
    public numberOfQuestions: number,
    public difficulty: number,
    public link: string,
    public tags?: string[],
    public maxTime?: number,
    public maxScore?: number,
    public categories?: string[],
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class InfoCardAdapter implements Adapter<InfoCardModel> {
  adapt(item: Papers, options: AdapterOptions): InfoCardModel {
    const defaultMaxScore = 20;
    const defaultMaxTime = 120;
    const defaultTags = [];
    return new InfoCardModel(
      item._id,
      item.title,
      item.description,
      options.numberOfItems,
      item.difficulty,
      options.link,
      defaultTags,
      defaultMaxTime,
      defaultMaxScore,
      item.categories,
    );
  }
}
