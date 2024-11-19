import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinerComponent } from './liner.component';
import { IcuLinerComponent } from './icu-liner/icu-liner.component';

const routes: Routes = [
  {
    path: '', component: LinerComponent,
    data: {
      title: "Liner",
      breadcrumb: "Liner",
    }
  },
  {
    path: 'create', component: IcuLinerComponent,
    data: {
      title: "Create Liner",
      breadcrumb: "Create Liner",
    }
  },
  {
    path: 'edit/:id', component: IcuLinerComponent,
    data: {
      title: "Edit Liner",
      breadcrumb: "Edit Liner",
    }
  },
  {
    path: 'view/:id', component: IcuLinerComponent,
    data: {
      title: "View Liner",
      breadcrumb: "View Liner",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinerRoutingModule { }
