import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./shared/layout/template/template.component').then(template => template.TemplateComponent),
    children: [
      {
        path: 'paciente',
        loadComponent: () => import('./pages/paciente/paciente.page').then(m => m.PacientePage)
      },
      {
        path: 'capture-ia',
        loadComponent: () => import('./pages/capture-ia/capture-ia.page').then(m => m.CaptureIAPage)
      },
      {
        path: 'history-paciente',
        loadComponent: () => import('./pages/history-paciente/history-paciente.page').then(m => m.HistoryPacientePage)
      },
      {
        path: 'result-paciente',
        loadComponent: () => import('./pages/result-paciente/result-paciente.page').then(m => m.ResultPacientePage)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
