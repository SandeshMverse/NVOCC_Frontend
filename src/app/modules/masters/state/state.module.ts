import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { IcuStateComponent } from './icu-state/icu-state.component';
import { StateService } from '@shared/_http/state.service';
import { FormComponent } from '@shared/component/form/form.component';
import { TableComponent } from '@shared/component/table/table.component';
import { CountryService } from '@shared/_http/country.service';


@NgModule({
  declarations: [StateComponent, IcuStateComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [StateService,CountryService]
})
export class StateModule { }
