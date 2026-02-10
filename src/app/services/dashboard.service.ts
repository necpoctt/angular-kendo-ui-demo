import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ChartData } from '../models/app.models'; // 匯入剛定義的介面

@Injectable({
  providedIn: 'root', // Singleton Service
})
export class DashboardService {
  // 模擬後端 DB 資料
  private mockChartData: ChartData[] = [
    { month: 'Jan', volume: 125000, rate: 99.8 },
    { month: 'Feb', volume: 140000, rate: 99.5 },
    { month: 'Mar', volume: 185000, rate: 98.2 },
    { month: 'Apr', volume: 210000, rate: 99.1 },
    { month: 'May', volume: 230000, rate: 99.4 },
    { month: 'Jun', volume: 260000, rate: 99.6 },
  ];

  constructor() {}

  /**
   * 取得儀表板數據
   * 模擬網路延遲 500ms
   */
  getChartData(): Observable<ChartData[]> {
    return of(this.mockChartData).pipe(delay(500));
  }
}
