import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusMasterService } from '@shared/_http/status.service';
import { statusData, statusSearchGroup } from '@shared/configs/status-config';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';
import { LoaderService } from '@shared/services/loader.service';
import { IFormStructure } from '@shared/models/form-model';
import { RowData } from '@shared/models/table-model';

@Component({
  selector: 'app-icu-status',
  templateUrl: './icu-status.component.html',
  styleUrl: './icu-status.component.scss'
})
export class IcuStatusComponent implements OnInit, AfterViewInit {

  subs: any;
  routeName: any;
  routeId: any;
  statusSearchGroupStructure!: IFormStructure[];
  statusData: RowData = statusData;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private statusmasterservice: StatusMasterService, private toastService: ToastService, private loaderService: LoaderService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.statusSearchGroupStructure = JSON.parse(JSON.stringify(statusSearchGroup));
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
      this.getstatus()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initialization(): void {
    this.statusSearchGroupStructure.forEach((ele, index) => {
      if (ele.type == 'select')
        this.setOptionValues(ele)
      if (this.routeName == 'view')
        ele.disable = true
    })
  }

  setOptionValues(ele: any) {
    switch (ele.listName) {
      case "parent":
        this.subs.add(this.statusmasterservice.getAllstatus().subscribe({
          next: (value) => {
            ele.listData = value.data.filter((item: any) => item.parent_id == 0) ?? []
          }
        }))
        break
    }
  }

  getstatus() {
    this.loaderService.showLoader();
    this.subs.add(this.statusmasterservice.getstatus(this.routeId).subscribe({
      next: (value) => {
        this.loaderService.hideLoader();
        this.statusData.data = value.data;
      }, error: () => {
        this.loaderService.hideLoader();
      }
    }))
  }

  handleSubmit(event: any) {
    let formData = JSON.parse(JSON.stringify(event["formValue"]));
    this.loaderService.showLoader();
    switch (this.routeName) {
      case 'create':
        formData.parent_id = formData.parent_id ?? 0;
        this.subs.add(this.statusmasterservice.createstatus(formData).subscribe({
          next: (value) => {
            this.loaderService.hideLoader();
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/status")
          },
          error: (err) => {
            this.loaderService.hideLoader();
            const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went to wrong!';
            this.toastService.open(message, 'error');
          }
        }))
        break;
      case 'edit':
        this.subs.add(this.statusmasterservice.updatestatus(formData, this.routeId).subscribe({
          next: (value) => {
            this.loaderService.hideLoader();
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/status")
          },
          error: (err) => {
            this.loaderService.hideLoader();
            const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went to wrong!';
            this.toastService.open(message, 'error');
          }
        }))
        break;

    }
  }
}


