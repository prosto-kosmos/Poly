import { ReportSubCategoryName } from '../enums/report-sub-category-name.enum';
import { QueryComparator } from './report-query.interface';

export interface ReportCategory {
  label: string;
  description?: string;
  subs: { [name in ReportSubCategoryName]?: ReportSubCategory };
}

export interface ReportSubCategory {
  label: string;
  comparators: QueryComparator[];
  value: ReportSubCategoryValue;
}

export type ReportSubCategoryValue =
  | ReportSubCategoryString
  | ReportSubCategoryNumber
  | ReportSubCategoryEnum
  | ReportSubCategoryDate;

export type ReportSubCategoryString = {
  type: 'string';
  default?: string;
};

export type ReportSubCategoryNumber = {
  type: 'number';
  default?: number;
};

export type ReportSubCategoryEnum<T = string> = {
  type: 'enum';
  options: T[];
  optionLabel: (option: T) => string;
  default?: T;
};

export type ReportSubCategoryDate = {
  type: 'date';
  default?: string;
};
