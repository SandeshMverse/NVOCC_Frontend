import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VesselRoutingModule } from './vessel-routing.module';
import { IcuVesselComponent } from './icu-vessel/icu-vessel.component';
import { VesselComponent } from './vessel.component';
import { TableComponent } from '@shared/component/table/table.component';
import { FormComponent } from '@shared/component/form/form.component';
import { VesselService } from '@shared/_http/vessel.service';
import { CountryService } from '@shared/_http/country.service';


@NgModule({
  declarations: [VesselComponent, IcuVesselComponent],
  imports: [
    CommonModule,
    VesselRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [VesselService, CountryService]
})
export class VesselModule { }
