import { IInfoCardModel } from '../models/info-card.model';

export const testInfoCards: IInfoCardModel[] = [
    {
        label: 'Basic of Algorithms',
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        difficulty: 2,
        numberOfQuestions: 20,
        tagList: ['Algorithms', 'Javascript'],
        maxScore: 80,
        maxTime: 20,
    },
    {
        label: 'Advanced Data-structures',
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        difficulty: 4.5,
        numberOfQuestions: 20,
        tagList: ['Algorithms', 'Javascript', 'Array', 'Graphs'],
        maxScore: 80,
        maxTime: 20,
    }
]
