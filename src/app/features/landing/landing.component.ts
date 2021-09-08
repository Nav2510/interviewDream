import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesGQL } from '../../../graphql/documents/queries/courses/courses.graphql-gen';
import {
  CardAdapter,
  CardModel,
} from '../../shared/components/card/card.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  courses$: Observable<CardModel[]>;

  constructor(
    private readonly coursesGQL: CoursesGQL,
    private readonly adapter: CardAdapter,
  ) {}

  ngOnInit(): void {
    const topFiveCourse = 5;

    this.courses$ = this.coursesGQL.fetch().pipe(
      map((response) =>
        response.data.courses.courses
          .map((item) => this.adapter.adapt(item))
          // eslint-disable-next-line no-magic-numbers
          .slice(0, topFiveCourse),
      ),
    );
  }
}
