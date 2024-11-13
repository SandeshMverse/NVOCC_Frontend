import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country.component';
import { IcuCountryComponent } from './icu-country/icu-country.component';

const routes: Routes = [
  {
    path: '', component: CountryComponent,
    data: {
      title: "Country",
      breadcrumb: "Country",
    }
  },
  {
    path: 'create', component: IcuCountryComponent,
    data: {
      title: "Create Country",
      breadcrumb: "Create Country",
    }
  },
  {
    path: 'edit/:id', component: IcuCountryComponent,
    data: {
      title: "Edit Country",
      breadcrumb: "Edit Country",
    }
  },
  {
    path: 'view/:id', component: IcuCountryComponent,
    data: {
      title: "View Country",
      breadcrumb: "View Country",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
