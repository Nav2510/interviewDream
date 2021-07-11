import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IBreadcrumbModel } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadCrumbService {
  private breadcrumbSource = new BehaviorSubject<IBreadcrumbModel[]>([
    {
      label: 'Dashboard',
      url: '/dashboard',
    },
    {
      label: 'Courses',
      url: '/dashboard/courses',
    },
    {
      label: 'All Courses',
      url: '/dashboard/courses',
    },
  ]);
  latestBreadcrumb = this.breadcrumbSource.asObservable();

  addBreadcrumb(breadcrumb: IBreadcrumbModel) {
    const currentValue = this.breadcrumbSource.value;
    const updatedValue = [...currentValue, breadcrumb];
    this.breadcrumbSource.next(updatedValue);
  }

  removeBreadcrumb(breadcrumb: IBreadcrumbModel[]) {
    console.log(breadcrumb);
  }
}
