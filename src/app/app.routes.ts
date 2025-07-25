import { Routes } from '@angular/router';
import { notAuthGuard } from './core/guard/not-auth.guard';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then(m => m.LoginPage),
    canActivate:[notAuthGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./shared/layout/template/template.component').then(template => template.TemplateComponent),
    children: [
      {
        path: 'history-paciente',
        loadComponent: () => import('./pages/history-paciente/history-paciente.page').then(m => m.HistoryPacientePage)
      },
      {
        path: 'result-paciente',
        loadComponent: () => import('./pages/result-paciente/result-paciente.page').then(m => m.ResultPacientePage)
      },
    ],
    canActivate:[authGuard]
  },
  {
    path: 'paciente',
    loadComponent: () => import('./pages/paciente/paciente.page').then(m => m.PacientePage),
    canActivate:[authGuard]
  },
  {
    path: 'paciente/:id/edit',
    loadComponent: () => import('./pages/paciente/paciente.page').then(m => m.PacientePage),
    canActivate:[authGuard]
  },
  {
    path: 'capture-ia/:id',
    loadComponent: () => import('./pages/capture-ia/capture-ia.page').then(m => m.CaptureIAPage),
    canActivate:[authGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
