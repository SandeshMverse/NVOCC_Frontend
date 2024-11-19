import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionService } from '@shared/_http/permission.service';
import { PermissionDetailsData, PermissionGroup } from '@shared/configs/access-control-config';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { IFormStructure } from '@shared/models/form-model';
import { RowData } from '@shared/models/table-model';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-icu-permission',
  templateUrl: './icu-permission.component.html',
  styleUrl: './icu-permission.component.scss'
})
export class IcuPermissionComponent implements OnInit, AfterViewInit {

  subs: any;
  routeName: any;
  routeId: any;
  PermissionGroupStructure!: IFormStructure[];
  permissionDetailsData: RowData = PermissionDetailsData;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private permissionService: PermissionService, private toastService: ToastService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.PermissionGroupStructure = JSON.parse(JSON.stringify(PermissionGroup));
    this.activatedroute.url.subscribe(urlSegments => {
      this.routeName = urlSegments[0]?.path;
    });
    this.activatedroute.paramMap.subscribe(params => {
      this.routeId = params.get('id');
    });
    this.initialization()
  }

  ngAfterViewInit(): void {
    if (this.routeId)
      this.getPermission()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initialization(): void {
    this.PermissionGroupStructure.forEach((ele, index) => {
      if (ele.type == 'select')
        this.setOptionValues(ele)
      if (this.routeName == 'view')
        ele.disable = true
    })
  }

  setOptionValues(ele: any) {
    switch (ele.listName) {
      case "service-type":
        this.subs.add(this.permissionService.getAllPermissions().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break
    }
  }

  getPermission() {
    this.subs.add(this.permissionService.getPermissions(this.routeId).subscribe({
      next: (value) => {
        this.permissionDetailsData.data = value.data
      }
    }))
  }

  handleSubmit(event: any) {
    let formData = JSON.parse(JSON.stringify(event["formValue"]))
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.permissionService.createPermissions(formData).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/permission")
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went to wrong!';
            this.toastService.open(message, 'error');
          }
        }))
        break;
      case 'edit':
        this.subs.add(this.permissionService.updatePermissions(formData, this.routeId).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/permission")
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went to wrong!';
            this.toastService.open(message, 'error');
          }
        }))
        break;

    }
  }

}


