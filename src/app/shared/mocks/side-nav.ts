import { IListModel } from '../models/list.model';

export const sideNav: IListModel[] = [
  {
    icon: 'home',
    label: 'Home',
    name: 'home',
    route: 'dashboard/home',
    order: 100,
  },
  {
    icon: 'message',
    label: 'Messages',
    name: 'message',
    route: 'dashboard/message',
    order: 200,
  },
  {
    icon: 'notifications',
    label: 'Notifications',
    name: 'notifications',
    route: 'dashboard/notfifications',
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
        route: 'dashboard/profile',
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
        route: 'dashboard/courses',
        order: 100,
      },
      {
        label: 'My courses',
        name: 'myCourses',
        route: 'dashboard/my-courses',
        order: 200,
      },
    ],
  },
  {
    icon: 'description',
    label: 'QA & Papers',
    name: 'QAAndPapers',
    order: 700,
    subList: [
      {
        label: 'All papers',
        name: 'allPapers',
        route: 'dashboard/papers',
        order: 100,
      },
      {
        label: 'Create practice paper',
        name: 'createPracticePaper',
        route: 'dashboard/papers/id',
        order: 200,
      },
      {
        label: 'Edit practice paper',
        name: 'editPracticePaper',
        route: 'dashboard/papers/edit',
        order: 300,
      },
      {
        label: 'All questions',
        name: 'allQuestions',
        route: 'dashboard/questions/all',
        order: 400,
      },
    ],
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
        route: 'dashboard/tests',
        order: 100,
      },
      {
        label: 'Create test',
        name: 'createTest',
        route: 'dashboard/test/create',
        order: 200,
      },
      {
        label: 'Edit test',
        name: 'editTest',
        route: 'dashboard/test/edit',
        order: 300,
      },
    ],
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
  },
];
