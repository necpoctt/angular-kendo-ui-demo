import { Routes } from '@angular/router';
// 注意：這裡使用 loadComponent 進行 Lazy Loading (效能優化)，這是架構師等級的寫法
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: "chart-dashboard" */
        './dashboard/chart-dashboard.component'
      ).then((m) => m.ChartDashboardComponent),
    title: '數據儀表板',
  },
  {
    path: 'manage',
    loadComponent: () =>
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: "employee" */
        './manage/employee.component'
      ).then((m) => m.EmployeeComponent),
    title: '員工薪資管理系統',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
