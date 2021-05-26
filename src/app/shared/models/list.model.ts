export interface IListModel {
  icon: string;
  label: string;
  name: string;
  order: number;
  route?: string;
  selected?: boolean;
  subList?: Array<{
    label: string;
    name: string;
    route: string;
    order: number;
  }>;
}
