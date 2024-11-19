import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcuStatusComponent } from './icu-status/icu-status.component';
import { StatusComponent } from './status.component';

const routes: Routes = [
  {
    path: '', component: StatusComponent,
    data: {
      title: "Status List",
      breadcrumb: "Status List",
    }
  },
  {
    path: 'create', component: IcuStatusComponent,
    data: {
      title: "Status Create",
      breadcrumb: "Status Create",
    }
  },
  {
    path: 'edit/:id', component: IcuStatusComponent,
    data: {
      title: "Edit Status",
      breadcrumb: "Edit Status",
    }
  },
  {
    path: 'view/:id', component: IcuStatusComponent,
    data: {
      title: "View Status",
      breadcrumb: "View Status",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
