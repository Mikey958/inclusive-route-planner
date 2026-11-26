import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Inclusive Route Planner',
  },
  {
    path: 'routes',
    pathMatch: 'full',
    loadComponent: () => import('./pages/routes/routes').then((m) => m.RoutesPage),
    title: 'Каталог маршрутов',
  },
  {
    path: 'create',
    pathMatch: 'full',
    loadComponent: () => import('./pages/create/create').then((m) => m.CreatePage),
    title: 'Создание маршрута',
  },
];
