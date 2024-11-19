import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleAndPermissionsControllerService } from '@shared/_http/role-permission.service';
import { RolePermissionDetailsData } from '@shared/configs/access-control-config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-role-page-permission',
  templateUrl: './role-page-permission.component.html',
  styleUrl: './role-page-permission.component.scss'
})
export class RolePagePermissionComponent implements OnInit {
  roleDetailsData: any = RolePermissionDetailsData;
  subs: Subscription = new Subscription();

  constructor(private router: Router, private rolePagePermissionService: RoleAndPermissionsControllerService) { }

  ngOnInit(): void {
    this.getAllRolePagePermissions();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getAllRolePagePermissions() {
    this.subs.add(
      this.rolePagePermissionService.getAllPageRolesPermission().subscribe({
        next: (value) => {
          console.log('getAllPageRolesPermission ', value.data)
          this.roleDetailsData.data = value.data;
        },
        error: (error) => {
          console.error('Error fetching role-page permissions:', error);
        }
      })
    );
  }

  handleCreateAction() {
    this.router.navigateByUrl('/role-permission/create');
  }

  handleDeleteAction(event: any) {
    this.subs.add(
      this.rolePagePermissionService.deleteRolePagePermission(event).subscribe({
        next: (value) => {
          this.getAllRolePagePermissions();
        },
        error: (error) => {
          console.error('Error deleting role-page permission:', error);
        }
      })
    );
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/role-permission/edit/${event}`);
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/role-permission/view/${event}`);
  }
}