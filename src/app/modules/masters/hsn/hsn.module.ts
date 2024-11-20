import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HsnRoutingModule } from './hsn-routing.module';
import { HsnComponent } from './hsn.component';
import { IcuHsnComponent } from './icu-hsn/icu-hsn.component';
import { HSNService } from '@shared/_http/hsn.service';
import { FormComponent } from '@shared/component/form/form.component';
import { TableComponent } from '@shared/component/table/table.component';


@NgModule({
  declarations: [HsnComponent, IcuHsnComponent],
  imports: [
    CommonModule,
    HsnRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [HSNService]
})
export class HsnModule { }
