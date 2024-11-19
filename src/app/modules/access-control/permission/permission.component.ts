import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from '@shared/_http/permission.service';
import { PermissionDetailsData } from '@shared/configs/access-control-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss'
})
export class PermissionComponent {

  permissionDetailsData: RowData = PermissionDetailsData;
  subs: any;

  constructor(private router: Router, private permissionService: PermissionService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.getAllPermissions();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getAllPermissions() {
    this.subs.add(this.permissionService.getAllPermissions().subscribe({
      next: (value) => {
        this.permissionDetailsData.data = value.data;
      }
    }))
  }


  handleCreateAction() {
    this.router.navigateByUrl("/permission/create")
  }

  handleDeleteAction(event: any) {
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/permission/edit/${event}`)
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/permission/view/${event}`)
  }
}
