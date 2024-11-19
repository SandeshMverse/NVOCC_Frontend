import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinerRoutingModule } from './liner-routing.module';
import { LinerService } from '@shared/_http/liner.service';
import { LinerComponent } from './liner.component';
import { TableComponent } from '@shared/component/table/table.component';
import { FormComponent } from '@shared/component/form/form.component';
import { IcuLinerComponent } from './icu-liner/icu-liner.component';


@NgModule({
  declarations: [LinerComponent,IcuLinerComponent],
  imports: [
    CommonModule,
    LinerRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [LinerService]
})
export class LinerModule { }
