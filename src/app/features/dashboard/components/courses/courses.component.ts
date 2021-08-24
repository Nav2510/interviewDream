/* eslint-disable indent */
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesGQL } from '../../../../../graphql/documents/queries/courses/courses.graphql-gen';
import { IFilterValueModel } from '../../../../shared/components/advance-search/filter-value.model';
import {
  CardAdapter,
  CardModel,
} from '../../../../shared/components/card/card.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$ = this.getCourses();

  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly coursesGQL: CoursesGQL,
    // eslint-disable-next-line no-unused-vars
    private readonly adapter: CardAdapter,
  ) {}

  onFilterChange(event: IFilterValueModel): void {
    this.courses$ = this.getCourses().pipe(
      map((courses: CardModel[]) => {
        // eslint-disable-next-line array-callback-return
        return courses.filter((course) => {
          const titleFilter =
            event.title !== ''
              ? course.title
                  .toLowerCase()
                  .includes((event.title as string).toLowerCase())
              : true;

          let tagFilter = true;
          for (let i = 0; i < event.tags.length; i++) {
            tagFilter = (event.tags as string[]).includes(course.tags[i]);
            if (tagFilter) {
              break;
            }
          }

          let categoryFilter = true;
          for (let i = 0; i < event.categories.length; i++) {
            categoryFilter = (event.categories as string[]).includes(
              course.categories[i],
            );
            if (categoryFilter) {
              break;
            }
          }

          return titleFilter && tagFilter && categoryFilter;
        });
      }),
    );
  }

  getCourses(): Observable<CardModel[]> {
    return this.coursesGQL
      .fetch()
      .pipe(
        map((response) =>
          response.data.courses.courses.map((item) => this.adapter.adapt(item)),
        ),
      );
  }
}
