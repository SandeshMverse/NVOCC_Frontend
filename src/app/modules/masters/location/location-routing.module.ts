import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';
import { IcuLocationComponent } from './icu-location/icu-location.component';

const routes: Routes = [
  {
    path: '', component: LocationComponent,
    data: {
      title: "Location",
      breadcrumb: "Location",
    }
  },
  {
    path: 'create', component: IcuLocationComponent,
    data: {
      title: "Create Location",
      breadcrumb: "Create Location",
    }
  },
  {
    path: 'edit/:id', component: IcuLocationComponent,
    data: {
      title: "Edit Location",
      breadcrumb: "Edit Location",
    }
  },
  {
    path: 'view/:id', component: IcuLocationComponent,
    data: {
      title: "View Location",
      breadcrumb: "View Location",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
