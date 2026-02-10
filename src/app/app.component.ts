import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { KENDO_INDICATORS } from '@progress/kendo-angular-indicators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, KENDO_INDICATORS],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  // 模擬使用者資料
  currentUser = {
    name: 'Howard Liao',
    role: 'Sr. Frontend',
    initials: 'HL',
  };

  navItems = [
    { label: '數據儀表板', path: '/dashboard', icon: 'k-i-chart-line-markers' },
    { label: '員工管理系統', path: '/manage', icon: 'k-i-grid' },
  ];
}
