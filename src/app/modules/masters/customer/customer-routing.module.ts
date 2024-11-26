import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { IcuCustomerComponent } from './icu-customer/icu-customer.component';


const routes: Routes = [
  {
    path: '', component: CustomerComponent,
    data: {
      title: "Customer",
      breadcrumb: "Customer",
    }
  },
  {
    path: 'create', component: IcuCustomerComponent,
    data: {
      title: "Create Customer",
      breadcrumb: "Create Customer",
    }
  },
  {
    path: 'edit/:id', component: IcuCustomerComponent,
    data: {
      title: "Edit Customer",
      breadcrumb: "Edit Customer",
    }
  },
  {
    path: 'view/:id', component: IcuCustomerComponent,
    data: {
      title: "View Customer",
      breadcrumb: "View Customer",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
