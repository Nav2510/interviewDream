import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { CoursesGQL } from '../../../../../graphql/documents/queries/courses/courses.graphql-gen';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courseData$ = this.coursesGQL
    .fetch()
    .pipe(map((response) => response.data.courses));

  // eslint-disable-next-line no-unused-vars
  constructor(private readonly coursesGQL: CoursesGQL) {}

  onFilterChange(event: Event): void {
    console.log(event);
  }
}
