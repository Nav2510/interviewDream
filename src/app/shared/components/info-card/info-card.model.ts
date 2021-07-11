export interface InfoCardModel {
  id: number;
  label: string;
  description: string;
  tagList: string[];
  numberOfQuestions: number;
  difficulty: number;
  maxTime?: number;
  maxScore?: number;
}
