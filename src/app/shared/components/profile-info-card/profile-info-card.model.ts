import { Injectable } from '@angular/core';
import { Adapter, AdapterOptions } from '../../../core/adapter';

export class ProfileInfoCardModel {
  constructor(
    public title: string,
    public summary?: string,
    public list?: Array<ProfileInfoCardListModel>,
  ) {}
}

export class ProfileInfoCardListModel {
  constructor(
    public label: string,
    public value: string,
    public type: 'input' | 'select',
    public options?: Array<{
      label: string;
      value: string;
    }>,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ProfileInfoCardAdapter implements Adapter<ProfileInfoCardModel> {
  adapt(
    item: { [key: string]: any },
    options?: AdapterOptions,
  ): ProfileInfoCardModel {
    const list: ProfileInfoCardListModel[] = [];
    const keys = Object.keys(item);

    keys.forEach((key) => {
      if (key !== '__typename') {
        list.push(new ProfileInfoCardListModel(key, item[key], 'input'));
      }
    });
    return new ProfileInfoCardModel(options.title, options?.summary, list);
  }
}
