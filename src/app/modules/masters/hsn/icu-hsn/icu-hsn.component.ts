import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HSNService } from '@shared/_http/hsn.service';
import { HSNDetailsData, HSNTypeSearchGroup } from '@shared/configs/hsn-config';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { IFormStructure } from '@shared/models/form-model';
import { RowData } from '@shared/models/table-model';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-icu-hsn',
  templateUrl: './icu-hsn.component.html',
  styleUrl: './icu-hsn.component.scss'
})
export class IcuHsnComponent implements OnInit, AfterViewInit {

  subs: any;
  routeName: any;
  routeId: any;
  HSNTypeSearchGroupStructure!: IFormStructure[];
  HSNDetailsData: RowData = HSNDetailsData;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private hsnservice: HSNService, private toastService: ToastService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.HSNTypeSearchGroupStructure = JSON.parse(JSON.stringify(HSNTypeSearchGroup));
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
      this.getHSN()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initialization(): void {
    this.HSNTypeSearchGroupStructure.forEach((ele, index) => {
      if (this.routeName == 'view')
        ele.disable = true
    })
  }

  getHSN() {
    this.subs.add(this.hsnservice.getHSN(this.routeId).subscribe({
      next: (value) => {
        this.HSNDetailsData.data = value.data
      }
    }))
  }

  handleSubmit(event: any) {
    let formData = JSON.parse(JSON.stringify(event["formValue"]))
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.hsnservice.createHSN(formData).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/hsn")
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went to wrong!';
            this.toastService.open(message, 'error');
          }
        }))
        break;
      case 'edit':
        this.subs.add(this.hsnservice.updateHSN(formData, this.routeId).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/hsn")
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




