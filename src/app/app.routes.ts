import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    { path: '**', component: NotFoundComponent }
];
