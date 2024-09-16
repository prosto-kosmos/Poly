export interface ReportDepartment {
  id: number;
  label: string;
  children?: ReportDepartment[];
}
