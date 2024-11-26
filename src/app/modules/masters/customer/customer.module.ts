import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { IcuCustomerComponent } from './icu-customer/icu-customer.component';
import { TableComponent } from '@shared/component/table/table.component';
import { FormComponent } from '@shared/component/form/form.component';
import { CustomerService } from '@shared/_http/customer.service';
import { CityService } from '@shared/_http/city.service';
import { CountryService } from '@shared/_http/country.service';
import { StateService } from '@shared/_http/state.service';


@NgModule({
  declarations: [CustomerComponent, IcuCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [CustomerService,CityService,CountryService,StateService]
})
export class CustomerModule { }
