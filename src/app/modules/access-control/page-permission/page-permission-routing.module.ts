import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcuPagePermissionComponent } from './icu-page-permission/icu-page-permission.component';
import { PagePermissionComponent } from './page-permission.component';

const routes: Routes = [
  {
    path: '', component: PagePermissionComponent,
    data: {
      title: "Pages",
      breadcrumb: "Pages",
    }
  },
  {
    path: 'create', component: IcuPagePermissionComponent,
    data: {
      title: "Create Permission",
      breadcrumb: "Create Permission",
    }
  },
  {
    path: 'edit/:id', component: IcuPagePermissionComponent,
    data: {
      title: "Edit page Permission",
      breadcrumb: "Edit page Permission",
    }
  },
  {
    path: 'view/:id', component: IcuPagePermissionComponent,
    data: {
      title: "View page Permission",
      breadcrumb: "View page Permission",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagePermissionRoutingModule { }
