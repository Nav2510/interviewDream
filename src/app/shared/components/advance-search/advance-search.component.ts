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
import { ADVANCE_SEARCH_CONFIG } from './advance-search.constant';
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

  readonly filterConfig = ADVANCE_SEARCH_CONFIG;

  filterModel: FormGroup;
  selectedItems: ChipModel[] = [];

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
