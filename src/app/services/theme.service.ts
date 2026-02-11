import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private platformId = inject(PLATFORM_ID);
  
  // Signal to track current theme - initialize with default, will be set in constructor
  theme = signal<Theme>('light');

  constructor() {
    // Initialize theme from storage or system preference
    const initialTheme = this.getInitialTheme();
    this.theme.set(initialTheme);
    
    // Apply theme immediately
    this.applyTheme(initialTheme);
  }

  private getInitialTheme(): Theme {
    // Only check localStorage and system preference in browser
    if (isPlatformBrowser(this.platformId)) {
      try {
        // Check localStorage first
        const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
        if (savedTheme === 'dark' || savedTheme === 'light') {
          return savedTheme;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
      } catch (e) {
        console.warn('Error reading theme preference:', e);
      }
    }
    
    // Default to light
    return 'light';
  }

  toggleTheme(): void {
    const currentTheme = this.theme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.theme.set(newTheme);
    this.applyTheme(newTheme);
    this.saveTheme(newTheme);
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.applyTheme(theme);
    this.saveTheme(theme);
  }

  private applyTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    try {
      const html = document.documentElement;
      
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    } catch (e) {
      console.error('Error applying theme:', e);
    }
  }

  private saveTheme(theme: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(this.THEME_KEY, theme);
      } catch (e) {
        console.warn('Error saving theme preference:', e);
      }
    }
  }
}
