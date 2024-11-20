import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HsnComponent } from './hsn.component';
import { IcuHsnComponent } from './icu-hsn/icu-hsn.component';

const routes: Routes = [
  {
    path: '', component: HsnComponent,
    data: {
      title: "HSN",
      breadcrumb: "HSN",
    }
  },
  {
    path: 'create', component: IcuHsnComponent,
    data: {
      title: "Create HSN",
      breadcrumb: "Create HSN",
    }
  },
  {
    path: 'edit/:id', component: IcuHsnComponent,
    data: {
      title: "Edit HSN",
      breadcrumb: "Edit HSN",
    }
  },
  {
    path: 'view/:id', component: IcuHsnComponent,
    data: {
      title: "View HSN",
      breadcrumb: "View HSN",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HsnRoutingModule { }
