import { Routes } from '@angular/router';
import { PermissionGuard } from '@shared/guard/permission.guard';

export const dashData: Routes = [
    {
        path: 'dashboard',
        data: {
            title: "Dashboard",
            breadcrumb: "dashboard",
            pageId: 1
        },
        loadChildren: () => import('@modules/dashboard/dashboard.module').then(r => r.DashboardModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'country',
        data: {
            title: "Country",
            breadcrumb: "country",
            pageId:31
        },
        loadChildren: () => import('@modules/masters/country/country.module').then(r => r.CountryModule),
        // canActivate: [PermissionGuard]
    },
]