import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Employee } from '../models/app.models'; // 匯入剛定義的介面

// 模擬的 50 筆假資料
const MOCK_DATA: Employee[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `員工 ${i + 1}`,
  title: i % 3 === 0 ? '架構師' : i % 3 === 1 ? '資深工程師' : 'PM',
  salary: 30000 + Math.floor(Math.random() * 100000),
  hireDate: new Date(2025, i % 12, (i % 28) + 1),
  isActive: i % 5 !== 0,
}));

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees(state: State): Observable<GridDataResult> {
    // 在真實專案中，這裡會是 http.get('api/employees', { params: toDataSourceRequest(state) })
    const result = process(MOCK_DATA, state);
    // --- 模擬後端邏輯 End ---

    // 模擬網路延遲 300ms，讓 Loading 效果出來
    return of(result).pipe(delay(300));
  }
}
