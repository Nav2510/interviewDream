import { QuestionModel } from '../components/question-card/question.model';

export interface TestModel {
  label: string;
  id: string;
  description: string;
  // TODO: Need to check with APIs
  questions: QuestionModel[];
  difficulty: number;
  numberOfQuestions: number;
  maxMarks: number;
  maxTime: number;
  passingMarks?: number;
  categories: string[];
  subCategories: string[];
}
