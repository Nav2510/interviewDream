import { IQuestionModel } from './question.model';

export interface ITestModel {
    label: string;
    id: string;
    description: string;
    // TODO: Need to check with APIs
    questions: IQuestionModel[];
    difficulty: number;
    numberOfQuestions: number;
    maxMarks: number;
    maxTime: number;
    passingMarks?: number;
    categories: string[];
    subCategories: string[];
}
