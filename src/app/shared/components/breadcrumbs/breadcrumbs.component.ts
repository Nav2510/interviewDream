import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { IBreadcrumbModel } from '../../models/breadcrumb.model'
import { BreadCrumbService } from '../../services/breadcrumbs.service'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  breadcrumbList: IBreadcrumbModel[]

  constructor( private breadcrumbService: BreadCrumbService ) { }

  private subscription = new Subscription()

  ngOnInit(): void {
    this.subscription.add(
      this.breadcrumbService.latestBreadcrumb.subscribe((breadcrumbList: IBreadcrumbModel[]) => {
        this.breadcrumbList = breadcrumbList
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
