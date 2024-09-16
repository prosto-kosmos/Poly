import { ReportSubCategoryName } from '../enums/report-sub-category-name.enum';
import {
  ReportSubCategoryRank,
  ReportSubCategoryRankLabels,
} from '../enums/report-sub-category-rank.enum';
import {
  ReportCategory,
  ReportSubCategoryEnum,
} from '../interfaces/report-category.interface';
import { QueryComparator } from '../interfaces/report-query.interface';

const defaultComparators: QueryComparator[] = ['=', '!=', '>', '>=', '<', '<='];

export const reportCategories: ReportCategory[] = [
  {
    label: 'Должность',
    subs: {
      [ReportSubCategoryName.PostName]: {
        label: 'Должность',
        comparators: defaultComparators,
        value: { type: 'string' },
      },
      [ReportSubCategoryName.PostDate]: {
        label: 'Дата',
        comparators: defaultComparators,
        value: { type: 'date' },
      },
    },
  },
  {
    label: 'Звание',
    subs: {
      [ReportSubCategoryName.RankName]: {
        label: 'Звание',
        comparators: defaultComparators,
        value: {
          type: 'enum',
          options: Object.keys(ReportSubCategoryRankLabels),
          optionLabel: (option) => ReportSubCategoryRankLabels[option],
          default: ReportSubCategoryRank.Col,
        } as ReportSubCategoryEnum<ReportSubCategoryRank>,
      },
      [ReportSubCategoryName.RankDate]: {
        label: 'Дата',
        comparators: defaultComparators,
        value: { type: 'date' },
      },
    },
  },
  {
    label: 'Образование',
    subs: {
      [ReportSubCategoryName.EduDegree]: {
        label: 'Степень',
        comparators: defaultComparators,
        value: { type: 'string' },
      },
      [ReportSubCategoryName.EduProgram]: {
        label: 'Программа',
        comparators: defaultComparators,
        value: { type: 'string' },
      },
      [ReportSubCategoryName.EduSpec]: {
        label: 'Специальность',
        comparators: defaultComparators,
        value: { type: 'string' },
      },
      [ReportSubCategoryName.EduInst]: {
        label: 'Учреждение',
        comparators: defaultComparators,
        value: { type: 'string' },
      },
      [ReportSubCategoryName.EduGradYear]: {
        label: 'Год окончания',
        comparators: defaultComparators,
        value: { type: 'string' },
      },
    },
  },
];
