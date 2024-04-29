import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./dyt/pages/home-page/home-page.component').then(p => p.HomePageComponent)
    },
    {
        path: 'create',
        loadComponent: () => import('./dyt/pages/create-page/create-page.component').then(p => p.CreatePageComponent)
    },
    {
        path: 'update/:id',
        loadComponent: () => import('./dyt/pages/update-page/update-page.component').then(p => p.UpdatePageComponent)
    }
];
