export interface NavUserActionModel {
  label: string;
  method?: () => any;
  url?: string;
  type: 'url' | 'method';
}
