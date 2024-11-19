import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PagePermissionService } from '@shared/_http/page-permission.service';
import { PagePermissionDetailsData } from '@shared/configs/access-control-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-page-permission',
  templateUrl: './page-permission.component.html',
  styleUrl: './page-permission.component.scss'
})
export class PagePermissionComponent implements OnInit, OnDestroy {
  PagePermissionDetailsData: RowData = PagePermissionDetailsData;
  subs: Subscription;

  constructor(private router: Router, private pagePermissionService: PagePermissionService) { }

  ngOnInit(): void {
    this.subs = new Subscription();
    this.getAllPagePermissions();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getAllPagePermissions() {
    this.subs.add(this.pagePermissionService.getAllPagePermissions().subscribe({
      next: (value) => {
        console.log('value = ', value.data);
        this.PagePermissionDetailsData.data = value.data;
      }
    }));
  }

  handleCreateAction() {
    this.router.navigateByUrl("/page-permission/create");
  }

  handleDeleteAction(event: any) {
    this.subs.add(this.pagePermissionService.deletePagePermission(event).subscribe({
      next: (value) => {
        this.getAllPagePermissions();
      }
    }));
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/page-permission/edit/${event}`);
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/page-permission/view/${event}`);
  }
}
