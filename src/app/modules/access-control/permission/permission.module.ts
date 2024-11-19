import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { FormComponent } from '@shared/component/form/form.component';
import { TableComponent } from '@shared/component/table/table.component';
import { PermissionComponent } from './permission.component';
import { IcuPermissionComponent } from './icu-permission/icu-permission.component';
import { PermissionService } from '@shared/_http/permission.service';


@NgModule({
  declarations: [PermissionComponent, IcuPermissionComponent],
  imports: [
    CommonModule,
    PermissionRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [PermissionService]
})
export class PermissionModule { }
