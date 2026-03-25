import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo';

export const routes: Routes = [
  { path: '', component: TemplateDemoComponent },
  { path: '**', redirectTo: '' }
];
