import { QuestionTypeEnum } from './question-type.enum';
import { OptionModel } from './option.model';

export interface QuestionModel {
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
  options?: OptionModel[];
}
