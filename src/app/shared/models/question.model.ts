import { QuestionTypeEnum } from '../enums/question-type.enum';
import { IOptionModel } from './option.model';

export interface IQuestionModel {
  id: string;
  type: QuestionTypeEnum;
  order: number;
  statement: string;
  numberOfOptions: number;
  categories: string[];
  subCategories: string[];
  difficulty: number;
  marks: number;
  explanation?: string;
  options?: IOptionModel[];
}
