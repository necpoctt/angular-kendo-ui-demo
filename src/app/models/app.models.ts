// 定義儀表板圖表資料介面
export interface ChartData {
  month: string;
  volume: number;
  rate: number;
}

export interface Employee {
  id: number;
  name: string;
  title: string;
  salary: number;
  hireDate: Date;
  isActive: boolean;
}
