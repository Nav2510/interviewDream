import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  CourseCategoryEnum,
  CourseTagEnum,
} from '../../../../graphql/generated/graphql.types';
import { ConfigModel } from '../dynamic-form/config.model';
import { IFilterValueModel } from './filter-value.model';

interface ChipModel {
  label: string;
  value: string;
  mappedField: string;
}

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvanceSearchComponent implements OnInit {
  @Output() filterChangeEvent = new EventEmitter<IFilterValueModel>();

  filterModel: FormGroup;
  selectedItems: ChipModel[] = [];
  filterConfig: ConfigModel[] = [
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
      defaultValue: [],
      classes: ['ivd-col-2'],
      options: [
        {
          label: 'Best Seller',
          value: CourseTagEnum.BestSeller,
        },
        {
          label: 'Top Rated',
          value: CourseTagEnum.TopRated,
        },
        {
          label: 'Hot',
          value: CourseTagEnum.Hot,
        },
        {
          label: 'Popular',
          value: CourseTagEnum.Popular,
        },
        {
          label: 'New',
          value: CourseTagEnum.New,
        },
      ],
    },
    {
      label: 'Categories',
      name: 'categories',
      type: 'dropdown',
      placeholder: 'Select',
      defaultValue: [],
      classes: ['ivd-col-2'],
      // TODO: Check for grouped dropdown with title
      options: [
        {
          label: 'Algorithm',
          value: CourseCategoryEnum.Algorithm,
        },
        {
          label: 'Backend',
          value: CourseCategoryEnum.Backend,
        },
        {
          label: 'Java',
          value: CourseCategoryEnum.Java,
        },
        {
          label: 'Language',
          value: CourseCategoryEnum.Language,
        },
        {
          label: 'Node',
          value: CourseCategoryEnum.Node,
        },
        {
          label: 'Web',
          value: CourseCategoryEnum.Web,
        },
      ],
    },
    {
      label: 'Difficulty',
      name: 'difficulty',
      type: 'dropdown',
      placeholder: 'Select',
      defaultValue: [],
      classes: ['ivd-col-2'],
      options: [
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

  ngOnInit() {
    this.build();
  }

  build() {
    const formObj = {};
    this.filterConfig.forEach((config: ConfigModel) => {
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
      let chipList: ChipModel[] = [];
      if (typeof valueList === 'object') {
        chipList = (valueList as string[]).map((value) => {
          return {
            label: `${this.createChipLabel(
              key,
              'key',
            )} : ${this.createChipLabel(value, 'value')}`,
            mappedField: key,
            value,
          };
        });
      } else if (valueList && typeof valueList === 'string') {
        chipList.push({
          label: `${this.createChipLabel(key, 'key')} : ${this.createChipLabel(
            valueList as string,
            'value',
          )}`,
          mappedField: key,
          value: valueList as string,
        });
      }
      this.selectedItems.push(...chipList);
    }
  }

  createChipLabel(value: string, type: 'key' | 'value'): string {
    if (type === 'key') {
      return this.capitalize(value);
    } else {
      let fragList = value.split('_');
      fragList = fragList.map((frag) => {
        return this.capitalize(frag);
      });
      return fragList.join(' ');
    }
  }

  capitalize(value: string): string {
    const charactersToRemove = 1;
    const firstletter = value.charAt(0).toUpperCase();
    const remainingStr = value
      .toLowerCase()
      .slice(charactersToRemove, value.length);
    return firstletter + remainingStr;
  }

  onChipClose(mappedField: string, value: string) {
    const modelValue: { [key: string]: string[] | string } =
      this.filterModel.value;

    let filterValue;
    if (typeof modelValue[mappedField] === 'object') {
      filterValue = (modelValue[mappedField] as string[]).filter(
        (item) => item !== value,
      );
    } else if (typeof modelValue[mappedField] === 'string') {
      filterValue = '';
    }
    this.filterModel.patchValue({ [mappedField]: filterValue });
    this.setChips();
    this.filterChangeEvent.next(this.filterModel.value);
  }
}
