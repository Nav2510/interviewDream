import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface IListModel {
  icon: string;
  label: string;
  name: string;
  order: number;
  route?: string;
  selected?: boolean;
  subList?: Array<{
    label: string;
    name: string;
    route: string;
    order: number;
  }>;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  private selectedListIndex = -1;
  private selectedSubListIndex = -1;
  private expandedList = -1;

  rippleColor = '#00000030';

  list: IListModel[] = [
    {
      icon: 'home',
      label: 'Home',
      name: 'home',
      route: 'home',
      order: 100,
    },
    {
      icon: 'message',
      label: 'Messages',
      name: 'message',
      route: 'message',
      order: 200,
    },
    {
      icon: 'notifications',
      label: 'Notifications',
      name: 'notifications',
      route: 'notfifications',
      order: 300,
    },
    {
      icon: 'person',
      label: 'Profile',
      name: 'profile',
      order: 400,
      subList: [
        {
          label: 'Public profile',
          name: 'publicProfile',
          route: 'profile/public',
          order: 100,
        },
        {
          label: 'Edit profile',
          name: 'editProfile',
          route: 'profile/edit',
          order: 200,
        },
      ],
    },
    {
      icon: 'description',
      label: 'Courses',
      name: 'courses',
      order: 500,
      subList: [
        {
          label: 'All courses',
          name: 'allCourses',
          route: 'courses/all',
          order: 100,
        },
        {
          label: 'My courses',
          name: 'myCourses',
          route: 'courses/my',
          order: 200,
        }
      ]
    },
    {
      icon: 'description',
      label: 'QA & Papers',
      name: 'QAAndPapers',
      order: 700,
      subList: [
        {
          label: 'All questions',
          name: 'allQuestions',
          route: 'qna/all',
          order: 100,
        },
        {
          label: 'All papers',
          name: 'allPapers',
          route: 'papers/all',
          order: 200,
        },
        {
          label: 'Create practice paper',
          name: 'createPracticePaper',
          route: 'papers/create',
          order: 300,
        },
        {
          label: 'Edit practice paper',
          name: 'editPracticePaper',
          route: 'papers/edit',
          order: 400,
        }
      ]
    },
    {
      icon: 'web_asset',
      label: 'Online Tests',
      name: 'onlineTests',
      order: 800,
      subList: [
        {
          label: 'All tests',
          name: 'allTests',
          route: 'test/all',
          order: 100,
        },
        {
          label: 'Create test',
          name: 'createTest',
          route: 'test/create',
          order: 200,
        },
        {
          label: 'Edit test',
          name: 'editTest',
          route: 'test/edit',
          order: 300,
        }
      ]
    },
    {
      icon: 'payment',
      label: 'Payment',
      name: 'payment',
      route: 'payment',
      order: 900,
    },
    {
      icon: 'settings',
      label: 'Account',
      name: 'account',
      route: 'account',
      order: 1000,
    },
    {
      icon: 'group',
      label: 'Administration',
      name: 'administration',
      route: 'admin',
      order: 1100,
    },
    {
      icon: 'help',
      label: 'Help',
      name: 'help',
      route: 'help',
      order: 1200,
    },
    {
      icon: 'logout',
      label: 'Logout',
      name: 'logout',
      route: 'logout',
      order: 1300,
    }
  ];

  isOpen = true;

  constructor(
    private router: Router
  ) {}

  onClickListItem(listIndex: number, route: string) {
    this.selectedListIndex = listIndex;
    this.router.navigate([route]);
  }

  toggleExpand(index: number) {
    this.expandedList = (this.expandedList !== index) ? index   : -1;
  }

  onClickSubListItem(listIndex: number, subIndex: number, route: string) {
    this.selectedListIndex = listIndex;
    this.selectedSubListIndex = subIndex;
    this.router.navigate([route]);
  }

  isSubSelected(listIndex: number, subIndex: number) {
    return listIndex === this.selectedListIndex && subIndex === this.selectedSubListIndex;
  }
}
