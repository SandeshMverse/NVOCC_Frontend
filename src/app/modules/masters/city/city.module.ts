import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { IcuCityComponent } from './icu-city/icu-city.component';
import { CityService } from '@shared/_http/city.service';
import { TableComponent } from '@shared/component/table/table.component';
import { FormComponent } from '@shared/component/form/form.component';


@NgModule({
  declarations: [CityComponent, IcuCityComponent],
  imports: [
    CommonModule,
    CityRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [CityService]
})
export class CityModule { }
