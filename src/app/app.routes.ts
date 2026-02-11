import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];