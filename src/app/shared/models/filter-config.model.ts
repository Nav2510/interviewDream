import { FilterConfigTypeEnum } from '../enums/filter-config-type.enum';
import { IOptionModel } from './filter-option.model';

export interface IFilterConfigModel {
    label: string
    name: string
    type: FilterConfigTypeEnum
    classes: string[]
    defaultValue?: string | number | number[] | string[]
    placeholder?: string
    options?: IOptionModel[]
    icon?: string
}
