import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialRateRequestRoutingModule } from './special-rate-request-routing.module';
import { SpecialRateRequestComponent } from './special-rate-request.component';
import { IcuSpecialRateRequestComponent } from './icu-special-rate-request/icu-special-rate-request.component';


@NgModule({
  declarations: [SpecialRateRequestComponent,IcuSpecialRateRequestComponent],
  imports: [
    CommonModule,
    SpecialRateRequestRoutingModule
  ]
})
export class SpecialRateRequestModule { }
