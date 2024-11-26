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
            pageId: 31
        },
        loadChildren: () => import('@modules/masters/country/country.module').then(r => r.CountryModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'state',
        data: {
            title: "State",
            breadcrumb: "state",
            pageId: 32
        },
        loadChildren: () => import('@modules/masters/state/state.module').then(r => r.StateModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'city',
        data: {
            title: "City",
            breadcrumb: "city",
            pageId: 33
        },
        loadChildren: () => import('@modules/masters/city/city.module').then(r => r.CityModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'permission',
        data: {
            title: "Permission",
            breadcrumb: "permission",
            pageId: 4,
        },
        loadChildren: () => import('@modules/access-control/permission/permission.module').then(r => r.PermissionModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'pages',
        data: {
            title: "Pages",
            breadcrumb: "pages",
            pageId: 5,
        },
        loadChildren: () => import('@modules/access-control/pages/pages.module').then(r => r.PagesModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'page-permission',
        data: {
            title: "Page permission",
            breadcrumb: "page-permission",
            pageId: 6,
        },
        loadChildren: () => import('@modules/access-control/page-permission/page-permission.module').then(r => r.PagePermissionModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'role',
        data: {
            title: "Role",
            breadcrumb: "role",
            pageId: 7,
        },
        loadChildren: () => import('@modules/access-control/role/role.module').then(r => r.RoleModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'role-permission',
        data: {
            title: "Role page permission",
            breadcrumb: "role-permission",
            pageId: 8,
        },
        loadChildren: () => import('@modules/access-control/role-page-permission/role-page-permission.module').then(r => r.RolePagePermissionModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'liner',
        data: {
            title: "Liner",
            breadcrumb: "liner",
            pageId: 31
        },
        loadChildren: () => import('@modules/masters/liner/liner.module').then(r => r.LinerModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'status',
        data: {
            title: "Status",
            breadcrumb: "status",
            pageId: 30
        },
        loadChildren: () => import('@modules/masters/status/status.module').then(r => r.StatusModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'hsn',
        data: {
            title: "HSN",
            breadcrumb: "hsn",
            pageId: 30
        },
        loadChildren: () => import('@modules/masters/hsn/hsn.module').then(r => r.HsnModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'location',
        data: {
            title: "Location",
            breadcrumb: "location",
            pageId: 30
        },
        loadChildren: () => import('@modules/masters/location/location.module').then(r => r.LocationModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'vessel',
        data: {
            title: "Vessel",
            breadcrumb: "vessel",
            pageId: 30
        },
        loadChildren: () => import('@modules/masters/vessel/vessel.module').then(r => r.VesselModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'port',
        data: {
            title: "Port",
            breadcrumb: "port",
            pageId: 30
        },
        loadChildren: () => import('@modules/masters/port/port.module').then(r => r.PortModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'voyage',
        data: {
            title: "Voyage",
            breadcrumb: "voyage",
            pageId: 30
        },
        loadChildren: () => import('@modules/masters/voyage/voyage.module').then(r => r.VoyageModule),
        // canActivate: [PermissionGuard]
    },
    {
        path: 'customer',
        data: {
            title: "Customer",
            breadcrumb: "customer",
            pageId: 30
        },
        loadChildren: () => import('@modules/masters/customer/customer.module').then(r => r.CustomerModule),
        // canActivate: [PermissionGuard]
    },
]