import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoyageRoutingModule } from './voyage-routing.module';
import { IcuVoyageComponent } from './icu-voyage/icu-voyage.component';
import { VoyageComponent } from './voyage.component';
import { TableComponent } from '@shared/component/table/table.component';
import { FormComponent } from '@shared/component/form/form.component';
import { VoyageService } from '@shared/_http/voyage.service';
import { VesselService } from '@shared/_http/vessel.service';
import { PortService } from '@shared/_http/port.service';
import { LocationService } from '@shared/_http/location.service';


@NgModule({
  declarations: [VoyageComponent, IcuVoyageComponent],
  imports: [
    CommonModule,
    VoyageRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [VoyageService, VesselService, PortService,LocationService]
})
export class VoyageModule { }
