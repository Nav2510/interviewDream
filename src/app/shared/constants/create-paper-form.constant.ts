import { ConfigModel } from '../components/dynamic-form/config.model';

export const PAPER_FORM: ConfigModel[] = [
  {
    label: 'paperConfig.title',
    name: 'title',
    type: 'input',
    defaultValue: '',
    placeholder: 'paperConfig.titlePlaceholder',
    classes: ['ivd-col-12'],
  },
  {
    label: 'paperConfig.description',
    name: 'description',
    type: 'textarea',
    placeholder: 'paperConfig.descriptionPlaceholder',
    classes: ['ivd-col-12'],
  },
  {
    label: 'paperConfig.categories',
    name: 'categories',
    type: 'dropdown',
    placeholder: 'paperConfig.categoriesPlaceholder',
    classes: ['ivd-col-12'],
    // TODO: Check for grouped dropdown with title
    options: [
      {
        label: 'paperConfig.all',
        value: 'all',
      },
      {
        label: 'paperConfig.dataStructure',
        value: 'data-structure',
      },
      {
        label: 'paperConfig.algorithms',
        value: 'algorithms',
      },
    ],
  },
  {
    label: 'paperConfig.type',
    name: 'type',
    type: 'dropdown',
    placeholder: 'paperConfig.typePlaceholder',
    classes: ['ivd-col-12', 'ivd-inline'],
  },
  {
    label: 'paperConfig.author',
    name: 'author',
    type: 'input',
    placeholder: 'paperConfig.authorPlaceholder',
    classes: ['ivd-col-12', 'ivd-inline'],
  },
  {
    label: 'paperConfig.save',
    name: 'save',
    type: 'button',
    classes: ['ivd-col-1-half'],
  },
];
