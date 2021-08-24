import { QuestionTypeEnum } from './question-type.enum';
import { OptionModel } from './option.model';

export interface QuestionModel {
  _id: string;
  type: QuestionTypeEnum;
  order: number;
  description: string;
  numberOfOptions: number;
  categories: string[];
  subCategories: string[];
  difficulty: number;
  marks: number;
  hasExplanation: boolean;
  explanation: string;
  options?: OptionModel[];
}
