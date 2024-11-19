import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoleAndPermissionsControllerService } from '@shared/_http/role-permission.service';
import { ToastService } from '@shared/services/toast.service';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { PagesService } from '@shared/_http/pages.service';
import { RoleService } from '@shared/_http/role.service';
import { PagePermissionService } from '@shared/_http/page-permission.service';
import { PermissionService } from '@shared/_http/permission.service';
import { IFormStructure } from '@shared/models/form-model';
import { RolePagePermissionGroup, RolePermissionDetailsData } from '@shared/configs/access-control-config';
import { Permission } from '@shared/models/permission-model';
import { RowData } from '@shared/models/table-model';

@Component({
  selector: 'app-icu-role-page-permission',
  templateUrl: './icu-role-page-permission.component.html',
  styleUrl: './icu-role-page-permission.component.scss'
})
export class IcuRolePagePermissionComponent implements OnInit, AfterViewInit, OnDestroy {
  subs: Subscription = new Subscription();
  routeName: string | undefined;
  routeId: string | null = null;
  roleSearchGroupStructure: IFormStructure[] = [];
  roleDetailsData: RowData = RolePermissionDetailsData;
  permissionsArray: Permission[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private rolePageControllerService: RoleAndPermissionsControllerService,
    private toastService: ToastService,
    private pageService: PagesService,
    private roleService: RoleService,
    private permissionService: PermissionService,
    private pagePermission: PagePermissionService,
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.roleSearchGroupStructure = JSON.parse(JSON.stringify(RolePagePermissionGroup));
    this.activatedRoute.url.subscribe(urlSegments => {
      this.routeName = urlSegments[0]?.path;
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.routeId = params.get('id');
    });
    this.initialization();
  }

  ngAfterViewInit(): void {
    if (this.routeId) {
      this.getRolePagePermissionById();
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  initialization(): void {
    this.roleSearchGroupStructure.forEach(ele => {
      if (ele.type === 'select') {
        this.setOptionValues(ele);
      }
      if (this.routeName === 'view') {
        ele.disable = true;
      }
    });
  }

  setOptionValues(ele: IFormStructure): void {
    switch (ele.listName) {
      case 'page-id':
        this.subs.add(this.pageService.getAllPages().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break;

      case 'role-id':
        this.subs.add(this.roleService.getAllRoles().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break;

      case "permission-id":
        this.subs.add(this.permissionService.getAllPermissions().subscribe({
          next: (value) => {
            ele.listData = value.data;
            this.permissionsArray = value.data;
          }
        }))
        break
    }
  }

  getRolePagePermissionById(): void {
    this.subs.add(this.rolePageControllerService.getRolePagePermission(this.routeId).subscribe({
      next: value => {
        this.roleDetailsData.data = value.data;
        const result = this.getPermissionsFromDescription(value.data.description);
        const resultArray: any = []
        result.forEach(permission => {
          resultArray.push(permission.permission_id);
        });
        this.roleDetailsData.data.permission_id = resultArray;
        this.roleDetailsData.data = { ...this.roleDetailsData.data }
      }
    }));
  }

  getPermissionsFromDescription(description: string): Permission[] {
    // Split the description into an array of permission names
    const permissionNames = description.split(' + ').map(name => name.trim().toLowerCase());

    // Find and return the permissions that match the names in the description
    return this.permissionsArray.filter(permission =>
      permissionNames.includes(permission.permission.toLowerCase()),
    );
  }

  handleSelectValueChange(event: any) {
    if (event.role_id) {
      return
    }
    if (event?.page_id) {
      this.setPermissionDataViaPageId(event.page_id);
    }
    if ('permission_id' in event[0]) {
      // Calculate the total permission values
      const totalPermissionValues = event.reduce((total: number, current: any) => {
        return total + (current.permission_values || 0);
      }, 0);

      // Create the permission description
      const description = this.generatePermissionDescription(event);
      this.roleDetailsData.data.description = description;
      this.roleDetailsData.data.permission = totalPermissionValues;
      const resultArray: any = []
      event.forEach((permission: any) => {
        resultArray.push(permission.permission_id);
      });
      this.roleDetailsData.data.permission_id = resultArray;
      this.roleDetailsData.data = { ...this.roleDetailsData.data }
      // this.roleDetailsData.data = { ...this.roleDetailsData.data }
      // Log or use the description as needed
    }
    this.cdr.detectChanges()
  }

  setPermissionDataViaPageId(id: any) {
    this.subs.add(this.pagePermission.getRoleByPageId(id).subscribe({
      next: (value) => {
        this.roleSearchGroupStructure.forEach((ele, index) => {
          if (ele.name === 'permission_id') {
            ele.listData = value.data
          }
        })
      }, error: (err) => {
      }
    }))
  }

  generatePermissionDescription(permissions: Permission[]): string {
    const activePermissions: string[] = [];
    permissions.forEach(permission => {
      activePermissions.push(permission.permission);
    });
    return activePermissions.join(' + ');
  }

  handleSubmit(event: any): void {
    const formData = JSON.parse(JSON.stringify(event.formValue));
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.rolePageControllerService.createRolePagePermission(formData).subscribe({
          next: value => {
            const message = responseMessages.codes.find(item => item.code === value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl('/role-permission');
          },
          error: err => {
            const message = responseMessages.codes.find(item => item.code === err.error_message)?.message ?? 'Something went wrong!';
            this.toastService.open(message, 'error');
          }
        }));
        break;
      case 'edit':
        this.subs.add(this.rolePageControllerService.updateRolePagePermission(formData, this.routeId!).subscribe({
          next: value => {
            const message = responseMessages.codes.find(item => item.code === value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl('/role-permission');
          },
          error: err => {
            const message = responseMessages.codes.find(item => item.code === err.error_message)?.message ?? 'Something went wrong!';
            this.toastService.open(message, 'error');
          }
        }));
        break;
    }
  }
}

