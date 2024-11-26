import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortComponent } from './port.component';
import { IcuPortComponent } from './icu-port/icu-port.component';

const routes: Routes = [
  {
    path: '', component: PortComponent,
    data: {
      title: "Port",
      breadcrumb: "Port",
    }
  },
  {
    path: 'create', component: IcuPortComponent,
    data: {
      title: "Create Port",
      breadcrumb: "Create Port",
    }
  },
  {
    path: 'edit/:id', component: IcuPortComponent,
    data: {
      title: "Edit Port",
      breadcrumb: "Edit Port",
    }
  },
  {
    path: 'view/:id', component: IcuPortComponent,
    data: {
      title: "View Port",
      breadcrumb: "View Port",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortRoutingModule { }
