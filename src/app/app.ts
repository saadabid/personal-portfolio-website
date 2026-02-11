import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'personal-portfolio-website';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Initialize theme service to apply theme on app load
    // The service constructor already handles initialization, but we ensure it's called
  }
}
