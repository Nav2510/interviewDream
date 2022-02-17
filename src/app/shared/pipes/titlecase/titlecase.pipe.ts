import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ivdTitlecase',
})
export class TitlecasePipe extends TitleCasePipe implements PipeTransform {
  transform(value: string): string;
  transform(value: null | undefined): null;
  transform(value: string | null | undefined): string | null;
  transform(value: string): string {
    return value
      .replace(
        /^[a-z]+|[A-Z][a-z]*/g,
        (string) => string.charAt(0).toUpperCase() + string.slice(1) + ' ',
      )
      .trim();
  }
}
