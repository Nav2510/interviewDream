import { IInfoCardModel } from 'src/app/shared/models/info-card.model';

export const papers: IInfoCardModel[] = [
  {
    label: 'Java Error handling',
    description:
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    difficulty: 3,
    numberOfQuestions: 20,
    tagList: ['Java', 'Error'],
  },
  {
    label: 'Sorting',
    description:
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    difficulty: 4.5,
    numberOfQuestions: 20,
    tagList: ['Algorithms', 'sort', 'javascript'],
  },
  {
    label: 'Graphql',
    // tslint:disable-next-line: max-line-length
    description:
      'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    difficulty: 3.4,
    numberOfQuestions: 20,
    tagList: ['Graphwl', 'javascript'],
  },
];
