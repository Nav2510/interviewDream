import { IInfoCardModel } from 'src/app/shared/models/info-card.model';

export const paperInfoCards: IInfoCardModel[] = [
    {
        label: 'Java Error handling',
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        difficulty: 3,
        numberOfQuestions: 20,
        tagList: ['Java', 'Error'],
    },
    {
        label: 'Sorting',
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        difficulty: 4.5,
        numberOfQuestions: 20,
        tagList: ['Algorithms', 'sort', 'javascript'],
    }
]
