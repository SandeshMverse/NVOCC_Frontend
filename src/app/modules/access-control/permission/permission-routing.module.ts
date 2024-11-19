import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionComponent } from './permission.component';
import { IcuPermissionComponent } from './icu-permission/icu-permission.component';

const routes: Routes = [
  {
    path: '', component: PermissionComponent,
    data: {
      title: "Permission",
      breadcrumb: "Permission",
    }
  },
  {
    path: 'create', component: IcuPermissionComponent,
    data: {
      title: "Permission Create",
      breadcrumb: "Permission Create",
    }
  },
  {
    path: 'edit/:id', component: IcuPermissionComponent,
    data: {
      title: "Edit Permission",
      breadcrumb: "Edit Permission",
    }
  },
  {
    path: 'view/:id', component: IcuPermissionComponent,
    data: {
      title: "View Permission",
      breadcrumb: "View Permission",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
