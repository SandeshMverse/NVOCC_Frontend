import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoleService } from '@shared/_http/role.service';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { ToastService } from '@shared/services/toast.service';
import { RoleDetailsData } from '@shared/configs/access-control-config';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss'
})
export class RoleComponent implements OnInit, OnDestroy {
  roleDetailsData: any = RoleDetailsData; 
  subs: Subscription = new Subscription();

  constructor(private router: Router, private roleService: RoleService,public toastService:ToastService) { }

  ngOnInit(): void {
    this.getAllRoles();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getAllRoles() {
    this.subs.add(
      this.roleService.getAllRoles().subscribe({
        next: (value) => {
          this.roleDetailsData.data = value.data;
        },
        error: (err) => {
          console.error('Error fetching roles:', err);
          const message = responseMessages.codes.find(item => item.code === err.error_message)?.message ?? '';
          this.toastService.open(message, 'error');
        }
      })
    );
  }

  handleCreateAction() {
    this.router.navigateByUrl('/role/create');
  }

handleDeleteAction(event: any) {
    this.subs.add(
      this.roleService.deleteRole(event).subscribe({
        next: (value) => {
          this.getAllRoles();
          const message = responseMessages.codes.find(item => item.code === value.message)?.message ?? '';
          this.toastService.open(message, 'success');
        },
        error: (error) => {
          console.error('Error deleting role:', error);
          const message = responseMessages.codes.find(item => item.code === error.error_message)?.message ?? '';
          this.toastService.open(message, 'error');
        }
      })
    );
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/role/edit/${event}`);
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/role/view/${event}`);
  }

}
