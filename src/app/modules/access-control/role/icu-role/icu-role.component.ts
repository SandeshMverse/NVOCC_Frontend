import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CountryService } from '@shared/_http/country.service';
import { RoleService } from '@shared/_http/role.service';
import { ToastService } from '@shared/services/toast.service';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { IFormStructure } from '@shared/models/form-model';
import { RowData } from '@shared/models/table-model';
import { RoleDetailsData, RoleGroup } from '@shared/configs/access-control-config';
import { MenuService } from '@shared/_http/menu.service';

@Component({
  selector: 'app-icu-role',
  templateUrl: './icu-role.component.html',
  styleUrl: './icu-role.component.scss'
})
export class IcuRoleComponent implements OnInit, AfterViewInit, OnDestroy {
  subs: Subscription = new Subscription();
  routeName: string | undefined;
  routeId: string | null = null;
  roleSearchGroupStructure: IFormStructure[] = [];
  roleDetailsData: RowData = RoleDetailsData;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roleControllerService: RoleService,
    private countryService: CountryService,
    private toastService: ToastService,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.roleSearchGroupStructure = JSON.parse(JSON.stringify(RoleGroup));
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
      this.getVendor();
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
      case 'country':
        this.subs.add(this.countryService.getAllCountry().subscribe({
          next: value => {
            ele.listData = value.data;
          }
        }));
        break;
      case 'menu-set':
        this.subs.add(this.menuService.getAllMenu().subscribe({
          next: value => {
            ele.listData = value.data;
          }
        }));
        break;
    }
  }

  getVendor(): void {
    this.subs.add(this.roleControllerService.getRole(this.routeId!).subscribe({
      next: value => {
        this.roleDetailsData.data = value.data;
      }
    }));
  }

  handleSubmit(event: any): void {
    const formData = JSON.parse(JSON.stringify(event.formValue));
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.roleControllerService.createRole(formData).subscribe({
          next: value => {
            const message = responseMessages.codes.find(item => item.code === value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl('/role');
          },
          error: err => {
            const message = responseMessages.codes.find(item => item.code === err.error_message)?.message ?? 'Something went wrong!';
            this.toastService.open(message, 'error');
          }
        }));
        break;
      case 'edit':
        this.subs.add(this.roleControllerService.updateRole(formData, this.routeId!).subscribe({
          next: value => {
            const message = responseMessages.codes.find(item => item.code === value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl('/role');
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

