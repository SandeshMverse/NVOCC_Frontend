import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { IcuCountryComponent } from './icu-country/icu-country.component';
import { TableComponent } from '@shared/component/table/table.component';
import { CountryService } from '@shared/_http/country.service';
import { FormComponent } from '@shared/component/form/form.component';


@NgModule({
  declarations: [CountryComponent,IcuCountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [CountryService]
})
export class CountryModule { }
