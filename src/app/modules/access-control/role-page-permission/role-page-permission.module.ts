import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolePagePermissionRoutingModule } from './role-page-permission-routing.module';
import { FormComponent } from '@shared/component/form/form.component';
import { TableComponent } from '@shared/component/table/table.component';
import { IcuRolePagePermissionComponent } from './icu-role-page-permission/icu-role-page-permission.component';
import { RolePagePermissionComponent } from './role-page-permission.component';
import { RoleAndPermissionsControllerService } from '@shared/_http/role-permission.service';
import { PagesService } from '@shared/_http/pages.service';
import { RoleService } from '@shared/_http/role.service';
import { PermissionService } from '@shared/_http/permission.service';
import { PagePermissionService } from '@shared/_http/page-permission.service';


@NgModule({
  declarations: [RolePagePermissionComponent, IcuRolePagePermissionComponent],
  imports: [
    CommonModule,
    RolePagePermissionRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [RoleAndPermissionsControllerService, PagesService, RoleService, PermissionService, PagePermissionService]
})
export class RolePagePermissionModule { }
