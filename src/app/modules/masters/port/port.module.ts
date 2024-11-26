import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortRoutingModule } from './port-routing.module';
import { PortComponent } from './port.component';
import { IcuPortComponent } from './icu-port/icu-port.component';
import { TableComponent } from '@shared/component/table/table.component';
import { FormComponent } from '@shared/component/form/form.component';
import { PortService } from '@shared/_http/port.service';
import { CountryService } from '@shared/_http/country.service';
import { CityService } from '@shared/_http/city.service';


@NgModule({
  declarations: [PortComponent, IcuPortComponent],
  imports: [
    CommonModule,
    PortRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [PortService,CountryService,CityService]
})
export class PortModule { }
