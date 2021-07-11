import { ConfigTypeEnum } from './config-type.enum';
import { OptionModel } from './option.model';

export interface ConfigModel {
  label: string;
  name: string;
  type: ConfigTypeEnum;
  classes: string[];
  defaultValue?: string | number | number[] | string[];
  placeholder?: string;
  options?: OptionModel[];
  icon?: string;
}
