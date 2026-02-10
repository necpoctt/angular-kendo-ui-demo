import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, GridDataResult } from '@progress/kendo-angular-grid';
import { State, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, GridModule],
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
  private service = inject(EmployeeService);

  public gridData: GridDataResult = { data: [], total: 0 };

  public loading = true;

  public state: State = {
    skip: 0,
    take: 10,
    sort: [],
    filter: { logic: 'and', filters: [] },
  };

  ngOnInit(): void {
    this.loadItems();
  }

  // 當使用者換頁、排序、篩選時觸發
  public dataStateChange(state: State): void {
    console.log('API 請求參數變更:', state); // 面試時可以秀這個 log
    this.state = state;
    this.loadItems();
  }

  private loadItems(): void {
    this.loading = true;

    this.service.getEmployees(this.state).subscribe((result) => {
      this.gridData = result;
      this.loading = false;
    });
  }

  public filterHighSalary(): void {
    const highSalaryFilter: CompositeFilterDescriptor = {
      logic: 'and',
      filters: [
        {
          field: 'salary',
          operator: 'gte',
          value: 100000,
        },
      ],
    };

    this.state.filter = highSalaryFilter;
    this.state.skip = 0;
    this.loadItems();
  }

  public clearFilter(): void {
    this.state.filter = { logic: 'and', filters: [] };
    this.state.skip = 0;
    this.loadItems();
  }
}
