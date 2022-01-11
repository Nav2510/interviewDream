import { InfoCardModel } from '../components/info-card/info-card.model';

export const TESTS: InfoCardModel[] = [
  {
    id: '918',
    label: 'Basic of Algorithms',
    description:
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    difficulty: 2,
    numberOfQuestions: 20,
    tags: ['Algorithms', 'Javascript'],
    maxScore: 80,
    maxTime: 20,
    link: '',
  },
  {
    id: '9187',
    label: 'Advanced Data-structures',
    description:
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    difficulty: 4.5,
    numberOfQuestions: 20,
    tags: ['Algorithms', 'Javascript', 'Array', 'Graphs'],
    maxScore: 80,
    maxTime: 20,
    link: '',
  },
  {
    id: '2871',
    label: 'Java',
    // tslint:disable-next-line: max-line-length
    description:
      'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    difficulty: 1.5,
    numberOfQuestions: 25,
    tags: ['Java'],
    maxScore: 100,
    maxTime: 100,
    link: '',
  },
  {
    id: '1181',
    label: 'Database',
    description:
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    difficulty: 5,
    numberOfQuestions: 10,
    tags: ['Algorithms', 'Database'],
    maxScore: 20,
    maxTime: 20,
    link: '',
  },
];
