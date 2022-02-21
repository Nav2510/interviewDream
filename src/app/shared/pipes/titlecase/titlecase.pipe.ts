import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { TitleCaseEnum } from './titlecase.enum';

@Pipe({
  name: 'ivdTitlecase',
})
export class TitlecasePipe extends TitleCasePipe implements PipeTransform {
  transform(value: string, previousCase?: TitleCaseEnum): string;
  transform(value: null | undefined, previousCase?: TitleCaseEnum): null;
  transform(
    value: string | null | undefined,
    previousCase?: TitleCaseEnum,
  ): string | null;
  transform(value: string, previousCase?: TitleCaseEnum): string {
    console.log(value, previousCase, previousCase === TitleCaseEnum.upperCase)
    switch (previousCase) {
    case TitleCaseEnum.upperCase: {
      return value ? value
        .split('_')
        .map((word) => {
          return word.charAt(0) + word.slice(1).toLowerCase()
        })
        .join(' '): value;
    }
    default: {
      return value
        .replace(
          /^[a-z]+|[A-Z][a-z]*/g,
          (string) => string.charAt(0).toUpperCase() + string.slice(1) + ' ',
        )
        .trim();
    }
    }
  }
}
