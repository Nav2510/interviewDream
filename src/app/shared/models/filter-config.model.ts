import { ConfigTypeEnum } from "../enums/config-type.enum";
import { IOptionModel } from "./filter-option.model";

export interface IConfigModel {
  label: string;
  name: string;
  type: ConfigTypeEnum;
  classes: string[];
  defaultValue?: string | number | number[] | string[];
  placeholder?: string;
  options?: IOptionModel[];
  icon?: string;
}
