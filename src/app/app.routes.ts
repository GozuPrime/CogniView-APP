import { Routes } from '@angular/router';
import { notAuthGuard } from './core/guard/not-auth.guard';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then(m => m.LoginPage),
    canActivate: [notAuthGuard]
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.component').then(i => i.IntroComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./shared/layout/template/template.component').then(template => template.TemplateComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'  // 👈 importante
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'history-paciente',
        loadComponent: () => import('./pages/history-paciente/history-paciente.page').then(m => m.HistoryPacientePage)
      },
      {
        path: 'result-paciente',
        loadComponent: () => import('./pages/result-paciente/result-paciente.page').then(m => m.ResultPacientePage)
      },
    ],
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },

];
