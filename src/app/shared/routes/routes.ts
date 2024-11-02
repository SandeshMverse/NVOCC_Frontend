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
    }
]