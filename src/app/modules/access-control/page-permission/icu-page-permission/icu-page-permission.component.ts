import { AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagePermissionService } from '@shared/_http/page-permission.service';
import { PagesService } from '@shared/_http/pages.service';
import { PermissionService } from '@shared/_http/permission.service';
import { PagePermissionDetailsData, PagePermissionSearchGroup } from '@shared/configs/access-control-config';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { IFormStructure } from '@shared/models/form-model';
import { Permission } from '@shared/models/permission-model';
import { RowData } from '@shared/models/table-model';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-icu-page-permission',
  templateUrl: './icu-page-permission.component.html',
  styleUrl: './icu-page-permission.component.scss'
})
export class IcuPagePermissionComponent implements OnInit, AfterViewInit, OnDestroy {

  subs: Subscription;
  routeName: string;
  routeId: string | null;
  PagePermissionSearchGroupStructure: IFormStructure[] = PagePermissionSearchGroup;
  PagePermissionDetailsData: RowData = PagePermissionDetailsData;
  permissionsArray: Permission[];
  constructor(private router: Router, private activatedroute: ActivatedRoute, private pagePermissionService: PagePermissionService,private pageService: PagesService,private permissionService: PermissionService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.subs = new Subscription();
    this.activatedroute.url.subscribe(urlSegments => {
      this.routeName = urlSegments[0]?.path ?? '';
    });
    this.activatedroute.paramMap.subscribe(params => {
      this.routeId = params.get('id');
    });
    this.initialization();
  }

  ngAfterViewInit(): void {
    if (this.routeId) {
      this.getPagePermission();
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  initialization(): void {
    this.PagePermissionSearchGroupStructure.forEach((ele) => {
      if (ele.type == 'select')
        this.setOptionValues(ele)
      if (this.routeName === 'view') {
        ele.disable = true;
      }
    });
  }

  setOptionValues(ele: any) {
    switch (ele.listName) {
      case "page-id":
        this.subs.add(this.pageService.getAllPages().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break

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

  getPagePermission(): void {
    if (this.routeId) {
      this.subs.add(this.pagePermissionService.getPagePermission(this.routeId).subscribe({
        next: (value) => {
          this.PagePermissionDetailsData.data = value.data;
          console.log('this.PagePermissionDetailsData = ',this.PagePermissionDetailsData.data);
          const description = value.data.permission;
        
          // Call the function with the description string instead of an array
          const result = this.getPermissionsFromDescription(description);
          const resultArray:any = []
          result.forEach(permission => {
            resultArray.push(permission.permission_id);
          });
          this.PagePermissionDetailsData.data.permission_id = resultArray;
          this.PagePermissionDetailsData.data = { ...this.PagePermissionDetailsData.data }
        }
      }));
    }
  }

  getPermissionsFromDescription(description: string): any[] {
    // Split the description into an array of permission names
    const permissionNames = description.split(' + ').map(name => name.trim().toLowerCase());

    // Find and return the permissions that match the names in the description
    return this.permissionsArray.filter(permission => 
      permissionNames.includes(permission.permission.toLowerCase()),
      );
  }

  handleSubmit(event: any): void {
    const formData = { ...event.formValue };
    formData.permissionIdList = formData.permission_id;
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.pagePermissionService.updateCreatePagePermission(formData).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code === value.error_message)?.message ?? 'Success';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/page-permission");
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code === err.error_message)?.message ?? 'Something went wrong!';
            this.toastService.open(message, 'error');
          }
        }));
        break;
      case 'edit':
        if (this.routeId) {
          this.subs.add(this.pagePermissionService.updatePagePermission(formData, this.routeId).subscribe({
            next: (value) => {
              const message = responseMessages.codes.find(item => item.code === value.error_message)?.message ?? 'Success';
              this.toastService.open(message, 'success');
              this.router.navigateByUrl("/page-permission");
            },
            error: (err) => {
              const message = responseMessages.codes.find(item => item.code === err.error_message)?.message ?? 'Something went wrong!';
              this.toastService.open(message, 'error');
            }
          }));
        }
        break;
    }
  }

  handleSwitchChange(item: any, event: boolean): void {
    item.value = event;
  }
}
