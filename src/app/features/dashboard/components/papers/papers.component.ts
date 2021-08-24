/* eslint-disable indent */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetPapersByCourseIdGQL } from '../../../../../graphql/documents/queries/papers/papers-by-course.graphql-gen';
import { IFilterValueModel } from '../../../../shared/components/advance-search/filter-value.model';
import {
  InfoCardAdapter,
  InfoCardModel,
} from '../../../../shared/components/info-card/info-card.model';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PapersComponent {
  papers$ = this.getPapers();

  constructor(
    private readonly paperByCourseGQL: GetPapersByCourseIdGQL,
    private readonly route: ActivatedRoute,
    private readonly adapter: InfoCardAdapter,
  ) {}

  onFilterChange(event: IFilterValueModel): void {
    this.papers$ = this.getPapers().pipe(
      map((papers: InfoCardModel[]) => {
        return papers.filter((paper) => {
          const titleFilter =
            event.title !== ''
              ? paper.label
                  .toLowerCase()
                  .includes((event.title as string).toLowerCase())
              : true;

          let tagFilter = true;
          for (let i = 0; i < event.tags.length; i++) {
            tagFilter = (event.tags as string[]).includes(paper.tags[i]);
            if (tagFilter) {
              break;
            }
          }

          let categoryFilter = true;
          for (let i = 0; i < event.categories.length; i++) {
            categoryFilter = (event.categories as string[]).includes(
              paper.categories[i],
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

  getPapers(): Observable<InfoCardModel[]> {
    return this.paperByCourseGQL
      .fetch({
        courseId: this.route.snapshot.params.courseId,
      })
      .pipe(
        map((response) => {
          const fetchedPapers = response.data.getPapersByCourseId;

          return fetchedPapers.papers.map((paper) =>
            this.adapter.adapt(paper, {
              numberOfItems: fetchedPapers.numberOfPapers,
              link: `/dashboard/papers/${paper._id}`,
            }),
          );
        }),
      );
  }
}
