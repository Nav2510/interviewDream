import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { sideNav } from '../../mocks/side-nav';
import { IListModel } from '../../models/list.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  private selectedListIndex = -1;
  private selectedSubListIndex = -1;
  private expandedList = -1;

  list: IListModel[] = sideNav;
  isOpen = true;

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {}

  onClickListItem(listIndex: number, route: string) {
    if (route) {
      this.selectedListIndex = listIndex;
    }
    this.router.navigate([route]);
  }

  toggleExpand(index: number) {
    this.expandedList = this.expandedList !== index ? index : -1;
  }

  onClickSubListItem(listIndex: number, subIndex: number, route: string) {
    this.selectedListIndex = listIndex;
    this.selectedSubListIndex = subIndex;
    this.router.navigate([route]);
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
