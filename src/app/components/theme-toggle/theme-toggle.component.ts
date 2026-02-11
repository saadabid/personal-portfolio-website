import { Component, ChangeDetectorRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  currentTheme: 'light' | 'dark' = 'light';

  constructor(
    public themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {
    // Initialize current theme
    this.currentTheme = this.themeService.theme();
    
    // Watch for theme changes
    effect(() => {
      this.currentTheme = this.themeService.theme();
      this.cdr.markForCheck();
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
