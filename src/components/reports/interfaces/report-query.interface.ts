import { ReportSubCategoryName } from '../enums/report-sub-category-name.enum';

export interface ReportQuery {
  departments: number[];
  conditions: ReportCondition[];
}

export interface ReportCondition {
  subCategoryName: ReportSubCategoryName;
  comparator: QueryComparator;
  value: LiteralValue;
}

export type LiteralValue = string | number | null;

export type QueryComparator = '=' | '!=' | '>' | '>=' | '<' | '<=';
