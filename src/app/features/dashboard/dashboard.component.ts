import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IFilterValueModel } from '../../shared/models/filter-value.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showSideNav = true;

  constructor(private readonly router: Router) {}

  onToggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }

  isNotProfilePage() {
    const url = this.router.url;
    return !url.includes('profile');
  }

  onFilterChange(value: IFilterValueModel) {
    console.log(value);
  }
}
