export interface InfoCardModel {
  id: number;
  label: string;
  description: string;
  tags: string[];
  numberOfQuestions: number;
  difficulty: number;
  maxTime?: number;
  maxScore?: number;
}
