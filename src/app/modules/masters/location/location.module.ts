import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { IcuLocationComponent } from './icu-location/icu-location.component';
import { FormComponent } from '@shared/component/form/form.component';
import { TableComponent } from '@shared/component/table/table.component';
import { LocationService } from '@shared/_http/location.service';
import { CountryService } from '@shared/_http/country.service';


@NgModule({
  declarations: [LocationComponent,IcuLocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [LocationService,CountryService]
})
export class LocationModule { }
