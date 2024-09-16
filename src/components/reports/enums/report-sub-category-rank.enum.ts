export enum ReportSubCategoryRank {
  Col = 'COL',
  LtCol = 'LTCOL',
  Major = 'MAJOR',
  Captain = 'CAPTAIN',
  SeniorLt = 'SENIORLT',
  Lt = 'LT',
  JuniorLt = 'JUNIORLT',
}

export const ReportSubCategoryRankLabels = {
  [ReportSubCategoryRank.Col]: 'Полковник',
  [ReportSubCategoryRank.LtCol]: 'Подполковник',
  [ReportSubCategoryRank.Major]: 'Майор',
  [ReportSubCategoryRank.Captain]: 'Капитан',
  [ReportSubCategoryRank.SeniorLt]: 'Старший лейтенант',
  [ReportSubCategoryRank.Lt]: 'Лейтенант',
  [ReportSubCategoryRank.JuniorLt]: 'Младший лейтенант',
};
