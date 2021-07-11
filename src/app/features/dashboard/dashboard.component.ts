import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

import { IFilterValueModel } from '../../shared/components/advance-search/filter-value.model';
import { NavUserActionModel } from '../../shared/components/top-nav/nav-user-actions.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showSideNav = true;
  userActions: NavUserActionModel[] = [
    { label: 'Profile', type: 'url', url: '/dashboard/profile' },
    {
      label: 'Logout',
      type: 'method',
      method: () => {
        this.onLogout();
      },
    },
  ];

  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly router: Router,
    // eslint-disable-next-line no-unused-vars
    private readonly authService: AuthService,
  ) {}

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

  onLogout(): void {
    this.authService.logout().subscribe((isLoggedOut) => {
      if (isLoggedOut) {
        this.router.navigate(['/login']);
      }
    });
  }
}
