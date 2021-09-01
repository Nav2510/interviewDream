export interface SideNavModel {
  icon: string;
  label: string;
  name: string;
  order: number;
  route?: string;
  disabled: boolean;
  selected?: boolean;
  method?: boolean;
  queryParams?: { [key: string]: any };
  subList?: Array<SideNavSubItemModel>;
}

export interface SideNavSubItemModel {
  label: string;
  name: string;
  order: number;
  route: string;
  disabled: boolean;
  queryParams?: { [key: string]: any };
}
