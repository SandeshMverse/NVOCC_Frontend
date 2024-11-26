import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcuVesselComponent } from './icu-vessel/icu-vessel.component';
import { VesselComponent } from './vessel.component';

const routes: Routes = [
  {
    path: '', component: VesselComponent,
    data: {
      title: "Vessel",
      breadcrumb: "Vessel",
    }
  },
  {
    path: 'create', component: IcuVesselComponent,
    data: {
      title: "Create Vessel",
      breadcrumb: "Create Vessel",
    }
  },
  {
    path: 'edit/:id', component: IcuVesselComponent,
    data: {
      title: "Edit Vessel",
      breadcrumb: "Edit Vessel",
    }
  },
  {
    path: 'view/:id', component: IcuVesselComponent,
    data: {
      title: "View Vessel",
      breadcrumb: "View Vessel",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VesselRoutingModule { }
