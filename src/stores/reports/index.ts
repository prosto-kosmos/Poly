import { defineStore } from 'pinia';
import {
  ReportCondition,
  ReportQuery,
} from '../../components/reports/interfaces/report-query.interface';
import { ReportSubCategoryName } from '../../components/reports/enums/report-sub-category-name.enum';
import { ReportDepartment } from '../../components/reports/interfaces/report-department.interface';
import { fetchDepartmentTree } from '../../components/reports/api/report.api';

type ReportState = {
  reportQuery: ReportQuery;
  departmentTree: ReportDepartment[];
};

const getAllDepartmentNodeIds = (departments: ReportDepartment[]): number[] => {
  return departments.reduce((acc, department) => {
    if (department.children) {
      acc = acc.concat(getAllDepartmentNodeIds(department.children));
    } else {
      acc.push(department.id);
    }
    return acc;
  }, [] as number[]);
};

export const useReportStore = defineStore('report', {
  state: (): ReportState => ({
    reportQuery: {
      conditions: [],
      departments: [],
    },
    departmentTree: [],
  }),
  getters: {
    conditions: (state) => state.reportQuery.conditions,
    departments: (state) => state.reportQuery.departments,
    conditionByIdx: (state) => {
      return (idx: number) => state.reportQuery.conditions[idx];
    },
    conditionsByName: (state) => {
      return (name: ReportSubCategoryName) =>
        state.reportQuery.conditions.filter(
          (condition) => condition.subCategoryName === name
        );
    },
  },
  actions: {
    async loadDepartmentTree(): Promise<void> {
      (this as ReportState).departmentTree = await fetchDepartmentTree();
    },

    tickAllDepartments(): void {
      const state = this as ReportState;
      state.reportQuery.departments = getAllDepartmentNodeIds(
        state.departmentTree
      );
    },

    setReportQuery(query: ReportQuery): void {
      (this as ReportState).reportQuery = query;
    },

    addCondition(
      subCategoryName: ReportSubCategoryName,
      value: number | string = null
    ): void {
      (this as ReportState).reportQuery.conditions.push({
        subCategoryName,
        comparator: '=',
        value,
      });
    },

    deleteConditionByIdx(idx: number): void {
      (this as ReportState).reportQuery.conditions.splice(idx, 1);
    },

    deleteCondition(condition: ReportCondition): void {
      const state = this as ReportState;
      const idx = state.reportQuery.conditions.indexOf(condition);
      state.reportQuery.conditions.splice(idx, 1);
    },

    submit(): void {
      // TODO: Implement api call
      console.warn((this as ReportState).reportQuery);
    },
  },
});

export default useReportStore;
