export interface Authority {
  departmentName?: string | null;
  permissions?: string[] | null;
  departmentId?: number | null;
  name: string;
  type: string;
}
