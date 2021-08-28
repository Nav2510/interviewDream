import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

import { SIDE_NAV_CONTENT } from './side-nav';
import { SideNavModel, SideNavSubItemModel } from './side-nav.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  private selectedListIndex = -1;
  private selectedSubListIndex = -1;
  private expandedList = -1;

  list: SideNavModel[] = SIDE_NAV_CONTENT;
  isOpen = true;

  // eslint-disable-next-line no-unused-vars
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {}

  onClickListItem(listIndex: number, item: SideNavModel) {
    if (item.route) {
      this.selectedListIndex = listIndex;
      this.router.navigate([item.route], { queryParams: item.queryParams });
    }
    if (item.method) {
      this.authService.logout().subscribe((isLoggedOut) => {
        if (isLoggedOut) {
          this.router.navigate(['/login']);
        }
      });
    }
  }

  toggleExpand(index: number) {
    this.expandedList = this.expandedList !== index ? index : -1;
  }

  onClickSubListItem(
    listIndex: number,
    subIndex: number,
    subItem: SideNavSubItemModel,
  ) {
    this.selectedListIndex = listIndex;
    this.selectedSubListIndex = subIndex;
    this.router.navigate([subItem.route], { queryParams: subItem.queryParams });
  }

  isListSelected(listIndex: number) {
    return (
      listIndex === this.selectedListIndex && this.selectedSubListIndex === -1
    );
  }

  isSubSelected(listIndex: number, subIndex: number) {
    return (
      subIndex === this.selectedSubListIndex &&
      listIndex === this.selectedListIndex
    );
  }
}
