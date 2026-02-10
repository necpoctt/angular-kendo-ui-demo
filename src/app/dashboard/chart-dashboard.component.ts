import { Component, OnInit, inject } from '@angular/core'; // 引入 OnInit 和 inject
import { CommonModule } from '@angular/common';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DashboardService } from '../services/dashboard.service'; // 匯入 Service
import { ChartData } from '../models/app.models'; // 匯入 Type
import { KENDO_LOADER } from '@progress/kendo-angular-indicators';

@Component({
  selector: 'app-chart-dashboard',
  standalone: true,
  imports: [CommonModule, ChartsModule, KENDO_LOADER],
  templateUrl: './chart-dashboard.component.html',
  styles: [],
})
export class ChartDashboardComponent implements OnInit {
  // 使用新的 inject() 語法注入 Service (Angular 14+ 推薦寫法)
  private DashboardService = inject(DashboardService);

  public chartData: ChartData[] = [];
  public categoryData: string[] = [];
  public loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.DashboardService.getChartData().subscribe((data) => {
      this.chartData = data;
      // 當資料回來後，才處理月份分類
      this.categoryData = data.map((d) => d.month);
      this.loading = false;
    });
  }
}
