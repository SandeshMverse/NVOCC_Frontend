import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { FormComponent } from '@shared/component/form/form.component';
import { TableComponent } from '@shared/component/table/table.component';
import { RoleComponent } from './role.component';
import { IcuRoleComponent } from './icu-role/icu-role.component';
import { MenuService } from '@shared/_http/menu.service';
import { RoleService } from '@shared/_http/role.service';


@NgModule({
  declarations: [RoleComponent, IcuRoleComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    TableComponent,
    FormComponent
  ],
  providers: [MenuService, RoleService]
})
export class RoleModule { }
