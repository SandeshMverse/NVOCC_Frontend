import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateComponent } from './state.component';
import { IcuStateComponent } from './icu-state/icu-state.component';

const routes: Routes = [
  {
    path: '', component: StateComponent,
    data: {
      title: "State",
      breadcrumb: "State",
    }
  },
  {
    path: 'create', component: IcuStateComponent,
    data: {
      title: "Create State",
      breadcrumb: "Create State",
    }
  },
  {
    path: 'edit/:id', component: IcuStateComponent,
    data: {
      title: "Edit State",
      breadcrumb: "Edit State",
    }
  },
  {
    path: 'view/:id', component: IcuStateComponent,
    data: {
      title: "View State",
      breadcrumb: "View State",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
