import { ConfigModel } from '../components/dynamic-form/config.model';

export const TEST_FORM: ConfigModel[] = [
  {
    label: 'Title',
    name: 'title',
    type: 'input',
    defaultValue: '',
    placeholder: 'Enter the title for test...',
    classes: ['ivd-col-12'],
  },
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    placeholder: 'Enter description of the test here',
    classes: ['ivd-col-12'],
  },
  {
    label: 'Categories',
    name: 'categories',
    type: 'dropdown',
    placeholder: 'Select tags for test...',
    defaultValue: ['all'],
    classes: ['ivd-col-12'],
    // TODO: Check for grouped dropdown with title
    options: [
      {
        label: 'All',
        value: 'all',
      },
      {
        label: 'Data Structure',
        value: 'data-structure',
      },
      {
        label: 'Algorithms',
        value: 'algorithms',
      },
    ],
  },
  {
    label: 'Set Time Limit',
    name: 'timeLimit',
    type: 'input',
    placeholder: 'Enter time limit...',
    classes: ['ivd-col-12'],
  },
  {
    label: 'Set Score',
    name: 'setScore',
    type: 'input',
    placeholder: 'Enter score value...',
    classes: ['ivd-col-12'],
  },
  {
    label: 'Type',
    name: 'type',
    type: 'dropdown',
    placeholder: 'Select type for test...',
    classes: ['ivd-col-12', 'ivd-inline'],
  },
  {
    label: 'Author',
    name: 'author',
    type: 'input',
    placeholder: 'Enter author name...',
    classes: ['ivd-col-12', 'ivd-inline'],
  },
  {
    label: 'Save',
    name: 'save',
    type: 'button',
    classes: ['ivd-col-1-half'],
  },
];
