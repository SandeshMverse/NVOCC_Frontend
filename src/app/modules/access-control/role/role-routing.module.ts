import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { IcuRoleComponent } from './icu-role/icu-role.component';

const routes: Routes = [
  {
    path: '', component: RoleComponent,
    data: {
        title: "Role List",
        breadcrumb: "Role List",
    }
},
{
    path: 'create', component: IcuRoleComponent,
    data: {
        title: "Role Create",
        breadcrumb: "Role Create",
    }
},
{
    path: 'edit/:id', component: IcuRoleComponent,
    data: {
        title: "Edit Role",
        breadcrumb: "Edit Role",
    }
},
{
    path: 'view/:id', component: IcuRoleComponent,
    data: {
        title: "View Role",
        breadcrumb: "View Role",
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
