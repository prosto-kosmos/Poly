import { ReportDepartment } from '../interfaces/report-department.interface';
import { REPORT_DEPARTMENTS_MOCK } from '../mocks/report-department.mock';

export function fetchDepartmentTree(): Promise<ReportDepartment[]> {
  return new Promise((resolve) => resolve(REPORT_DEPARTMENTS_MOCK));
}
