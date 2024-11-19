import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormComponent } from '@shared/component/form/form.component';
import { TableComponent } from '@shared/component/table/table.component';
import { PagesComponent } from './pages.component';
import { IcuPagesComponent } from './icu-pages/icu-pages.component';
import { PagesService } from '@shared/_http/pages.service';


@NgModule({
  declarations: [PagesComponent,IcuPagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [PagesService]
})
export class PagesModule { }
