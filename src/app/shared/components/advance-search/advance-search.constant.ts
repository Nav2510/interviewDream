import { CourseCategoryEnum, CourseTagEnum } from "../../../../graphql/generated/graphql.types";
import { ConfigModel } from "../dynamic-form/config.model";

export const ADVANCE_SEARCH_CONFIG: ConfigModel[] = [
  {
    label: 'shared.advanceSearch.title',
    name: 'title',
    type: 'input',
    defaultValue: '',
    placeholder: 'shared.advanceSearch.titlePlaceholder',
    classes: ['ivd-col-4-half'],
  },
  {
    label: 'shared.advanceSearch.tags',
    name: 'tags',
    type: 'dropdown',
    placeholder: 'shared.advanceSearch.select',
    defaultValue: [],
    classes: ['ivd-col-2'],
    options: [
      {
        label: 'shared.advanceSearch.bestSeller',
        value: CourseTagEnum.BestSeller,
      },
      {
        label: 'shared.advanceSearch.topRated',
        value: CourseTagEnum.TopRated,
      },
      {
        label: 'shared.advanceSearch.hot',
        value: CourseTagEnum.Hot,
      },
      {
        label: 'shared.advanceSearch.popular',
        value: CourseTagEnum.Popular,
      },
      {
        label: 'shared.advanceSearch.new',
        value: CourseTagEnum.New,
      },
    ],
  },
  {
    label: 'shared.advanceSearch.categories',
    name: 'categories',
    type: 'dropdown',
    placeholder: 'shared.advanceSearch.select',
    defaultValue: [],
    classes: ['ivd-col-2'],
    // TODO: Check for grouped dropdown with title
    options: [
      {
        label: 'shared.advanceSearch.algorithm',
        value: CourseCategoryEnum.Algorithm,
      },
      {
        label: 'shared.advanceSearch.backend',
        value: CourseCategoryEnum.Backend,
      },
      {
        label: 'shared.advanceSearch.java',
        value: CourseCategoryEnum.Java,
      },
      {
        label: 'shared.advanceSearch.language',
        value: CourseCategoryEnum.Language,
      },
      {
        label: 'shared.advanceSearch.node',
        value: CourseCategoryEnum.Node,
      },
      {
        label: 'shared.advanceSearch.web',
        value: CourseCategoryEnum.Web,
      },
    ],
  },
  {
    label: 'shared.advanceSearch.difficulty',
    name: 'difficulty',
    type: 'dropdown',
    placeholder: 'shared.advanceSearch.select',
    defaultValue: [],
    classes: ['ivd-col-2'],
    options: [
      {
        label: '1',
        value: '1',
        alternateLabel: 'Difficulty: 1',
      },
      {
        label: '2',
        value: '2',
        alternateLabel: 'Difficulty: 2',
      },
      {
        label: '3',
        value: '3',
        alternateLabel: 'Difficulty: 3',
      },
    ],
  },
  {
    label: 'shared.advanceSearch.filter',
    name: 'filter',
    type: 'button',
    classes: ['ivd-col-1-half'],
  },
];