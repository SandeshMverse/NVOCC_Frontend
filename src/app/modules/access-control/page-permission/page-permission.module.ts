import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePermissionRoutingModule } from './page-permission-routing.module';
import { TableComponent } from '@shared/component/table/table.component';
import { FormComponent } from '@shared/component/form/form.component';
import { IcuPagePermissionComponent } from './icu-page-permission/icu-page-permission.component';
import { PagePermissionComponent } from './page-permission.component';
import { PagePermissionService } from '@shared/_http/page-permission.service';
import { PagesService } from '@shared/_http/pages.service';
import { PermissionService } from '@shared/_http/permission.service';


@NgModule({
  declarations: [IcuPagePermissionComponent, PagePermissionComponent],
  imports: [
    CommonModule,
    PagePermissionRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [PagePermissionService, PagesService, PermissionService]
})
export class PagePermissionModule { }
