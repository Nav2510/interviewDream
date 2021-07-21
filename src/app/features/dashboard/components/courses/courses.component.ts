import { Component } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { CoursesGQL } from '../../../../../graphql/documents/queries/courses/courses.graphql-gen';
import { CardAdapter } from '../../../../shared/components/card/card.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$ = this.coursesGQL
    .fetch()
    .pipe(
      map((response) =>
        response.data.courses.courses.map((item) => this.adapter.adapt(item)),
      ),
    );

  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly coursesGQL: CoursesGQL,
    // eslint-disable-next-line no-unused-vars
    private readonly adapter: CardAdapter,
  ) {}

  onFilterChange(event: Event): void {
    console.log(event);
  }
}
