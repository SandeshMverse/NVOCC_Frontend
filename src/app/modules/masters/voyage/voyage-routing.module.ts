import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcuVoyageComponent } from './icu-voyage/icu-voyage.component';
import { VoyageComponent } from './voyage.component';

const routes: Routes = [
  {
    path: '', component: VoyageComponent,
    data: {
      title: "Voyage",
      breadcrumb: "Voyage",
    }
  },
  {
    path: 'create', component: IcuVoyageComponent,
    data: {
      title: "Create Voyage",
      breadcrumb: "Create Voyage",
    }
  },
  {
    path: 'edit/:id', component: IcuVoyageComponent,
    data: {
      title: "Edit Voyage",
      breadcrumb: "Edit Voyage",
    }
  },
  {
    path: 'view/:id', component: IcuVoyageComponent,
    data: {
      title: "View Voyage",
      breadcrumb: "View Voyage",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoyageRoutingModule { }
