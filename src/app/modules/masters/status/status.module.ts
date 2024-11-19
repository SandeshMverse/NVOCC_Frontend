import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { FormComponent } from '@shared/component/form/form.component';
import { TableComponent } from '@shared/component/table/table.component';
import { StatusComponent } from './status.component';
import { IcuStatusComponent } from './icu-status/icu-status.component';
import { StatusMasterService } from '@shared/_http/status.service';


@NgModule({
  declarations: [StatusComponent,IcuStatusComponent],
  imports: [
    CommonModule,
    StatusRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [StatusMasterService]
})
export class StatusModule { }
