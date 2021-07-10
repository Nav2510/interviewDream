import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { BreadcrumbModel } from './breadcrumb.model';
import { BreadCrumbService } from './breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  breadcrumbList: BreadcrumbModel[];

  constructor(private readonly breadcrumbService: BreadCrumbService) {}

  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.breadcrumbService.latestBreadcrumb.subscribe(
        (breadcrumbList: BreadcrumbModel[]) => {
          this.breadcrumbList = breadcrumbList;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
