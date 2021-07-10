export interface ProfileInfoCardModel {
  title: string;
  summary?: string;
  list?: Array<{
    label: string;
    value: string;
    type: 'input' | 'select';
    options?: Array<{
      label: string;
      value: string;
    }>;
  }>;
}
