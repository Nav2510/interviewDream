import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { IConfigModel } from '../../models/filter-config.model';
import { IFilterValueModel } from '../../models/filter-value.model';

interface IChipModel {
  label: string;
  value: string;
  mappedField: string;
}

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss'],
})
export class AdvanceSearchComponent implements OnInit {
  @Output() filterChangeEvent = new EventEmitter<IFilterValueModel>();
  filterModel: FormGroup;
  selectedItems: IChipModel[] = [];
  filterConfig: IConfigModel[] = [
    {
      label: 'Title',
      name: 'title',
      type: 'input',
      defaultValue: '',
      placeholder: 'Search for any title here',
      classes: ['ivd-col-4-half'],
    },
    {
      label: 'Tags',
      name: 'tags',
      type: 'dropdown',
      placeholder: 'Select',
      defaultValue: ['all'],
      classes: ['ivd-col-2'],
      options: [
        {
          label: 'All',
          value: 'all',
        },
        {
          label: 'Best Seller',
          value: 'best-seller',
        },
        {
          label: 'Top Rated',
          value: 'top-rated',
        },
      ],
    },
    {
      label: 'Categories',
      name: 'categories',
      type: 'dropdown',
      placeholder: 'Select',
      defaultValue: ['all'],
      classes: ['ivd-col-2'],
      // TODO: Check for grouped dropdown with title
      options: [
        {
          label: 'All',
          value: 'all',
        },
        {
          label: 'Data Structure',
          value: 'data-structure',
        },
      ],
    },
    {
      label: 'Difficulty',
      name: 'difficulty',
      type: 'dropdown',
      placeholder: 'Select',
      defaultValue: ['all'],
      classes: ['ivd-col-2'],
      options: [
        {
          label: 'All',
          value: 'all',
        },
        {
          label: '1',
          value: '1',
          alternateLabel: 'Difficulty: 1',
        },
        {
          label: '2',
          value: '2',
          alternateLabel: 'Difficulty: 2',
        },
        {
          label: '3',
          value: '3',
          alternateLabel: 'Difficulty: 3',
        },
      ],
    },
    {
      label: 'Filter',
      name: 'filter',
      type: 'button',
      classes: ['ivd-col-1-half'],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.build();
  }

  build() {
    const formObj = {};
    this.filterConfig.forEach((config: IConfigModel) => {
      if (config.type !== 'button') {
        formObj[config.name] = new FormControl(config.defaultValue);
      }
    });
    this.filterModel = new FormGroup(formObj);
  }

  onSubmit(): void {
    this.filterChangeEvent.next(this.filterModel.value);
    this.setChips();
  }

  setChips(): void {
    this.selectedItems = [];
    for (const [key, valueList] of Object.entries(this.filterModel.value)) {
      if (typeof valueList === 'object') {
        let chipList: IChipModel[] = [];
        chipList = (valueList as string[])
          .filter((value) => {
            return value !== 'all';
          })
          .map((value) => {
            return {
              label:
                this.createChipLabel(key, 'key') +
                ' : ' +
                this.createChipLabel(value, 'value'),
              mappedField: key,
              value,
            };
          });
        this.selectedItems.push(...chipList);
      }
    }
  }

  createChipLabel(value: string, type: 'key' | 'value'): string {
    if (type === 'key') {
      const charactersToRemove = 4;
      return this.capitalize(value).slice(0, charactersToRemove);
    } else {
      let fragList = value.split('-');
      fragList = fragList.map((frag) => {
        return this.capitalize(frag);
      });
      return fragList.join(' ');
    }
  }

  capitalize(value: string): string {
    const charactersToRemove = 1;
    const firstletter = value.charAt(0).toUpperCase();
    const remainingStr = value.slice(charactersToRemove, value.length);
    return firstletter + remainingStr;
  }

  onChipClose(mappedField: string, value: string) {
    const modelValue: { [key: string]: string[] } = this.filterModel.value;
    const filterValue = modelValue[mappedField].filter(
      (item) => item !== value,
    );
    this.filterModel.patchValue({ [mappedField]: filterValue });
    this.setChips();
  }
}
