import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { CourseNameGQL } from '../../../../graphql/documents/queries/courses/course-name.graphql-gen';
import { PaperNameGQL } from '../../../../graphql/documents/queries/papers/paper-name.graphql-gen';
import { BREADCRUMB_URL } from './contants/breadcrumbs.constant';
import { BreadcrumbModel } from './models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs = new BehaviorSubject<BreadcrumbModel[]>([]);

  constructor(
    private readonly router: Router,
    private readonly courseNameGQL: CourseNameGQL,
    private readonly paperNameGQL: PaperNameGQL,
  ) {}

  ngOnInit(): void {
    this.createBreadcrumbs(this.router.url);
    this.router.events
      .pipe(
        map((navigation) => {
          if (navigation instanceof NavigationEnd) {
            this.createBreadcrumbs(navigation.url);
          }
        }),
      )
      .subscribe();
  }

  onLinkClick(breadcrumb: BreadcrumbModel, isLast: boolean): void {
    if (!isLast) {
      this.router.navigate([breadcrumb.url]);
    }
  }

  private createBreadcrumbs(url: string): void {
    const urlFragList = url.split('/');
    urlFragList.shift();
    const id = urlFragList[urlFragList.length - 1];
    if (urlFragList.includes('courses')) {
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        this.courseNameGQL
          .fetch({ id })
          .pipe(take(1))
          .subscribe((response) => {
            const title = response.data.course.title;
            urlFragList[urlFragList.length - 1] = title;
            this.breadcrumbs.next(
              urlFragList.map((fragment, index) => {
                return {
                  label:
                    index < urlFragList.length -1
                      ? `shared.breadcrumbs.${fragment}`
                      : fragment,
                  url: BREADCRUMB_URL[fragment],
                };
              }),
            );
          });
      }
    }
    if (urlFragList.includes('papers')) {
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        this.paperNameGQL
          .fetch({ id })
          .pipe(take(1))
          .subscribe((response) => {
            const title = response.data.paper.title;
            urlFragList[urlFragList.length - 1] = title;
            this.breadcrumbs.next(
              urlFragList.map((fragment, index) => {
                return {
                  label: index < urlFragList.length - 1 ? `shared.breadcrumbs.${fragment}` : fragment,
                  url: BREADCRUMB_URL[fragment],
                };
              }),
            );
          });
      }
    }
    this.breadcrumbs.next(
      urlFragList.map((fragment) => {
        return { label: `shared.breadcrumbs.${fragment}`, url: BREADCRUMB_URL[fragment] };
      }),
    );
  }

  isObjectId(label: string): boolean {
    return !!label.match(/^[0-9a-fA-F]{24}$/);
  }
}
