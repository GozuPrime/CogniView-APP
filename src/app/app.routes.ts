import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'history-paciente',
    loadComponent: () => import('./pages/history-paciente/history-paciente.page').then(m => m.HistoryPacientePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'paciente',
    loadComponent: () => import('./pages/paciente/paciente.page').then(m => m.PacientePage)
  },
  {
    path: 'result-paciente',
    loadComponent: () => import('./pages/result-paciente/result-paciente.page').then(m => m.ResultPacientePage)
  },
  {
    path: 'capture-ia',
    loadComponent: () => import('./pages/capture-ia/capture-ia.page').then(m => m.CaptureIAPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
