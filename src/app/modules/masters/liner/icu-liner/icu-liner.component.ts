import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '@shared/_http/country.service';
import { LinerService } from '@shared/_http/liner.service';
import { StateService } from '@shared/_http/state.service';
import { LinerDetailsData, LinerSearchGroup } from '@shared/configs/liner-config';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { IFormStructure } from '@shared/models/form-model';
import { RowData } from '@shared/models/table-model';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-icu-liner',
  templateUrl: './icu-liner.component.html',
  styleUrl: './icu-liner.component.scss'
})
export class IcuLinerComponent implements OnInit, AfterViewInit {

  subs: any;
  routeName: any;
  routeId: any;
  LinerSearchGroupStructure!: IFormStructure[];
  LinerDetailsData: RowData = LinerDetailsData;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private linerService: LinerService, private toastService: ToastService, private countryservice: CountryService, private stateservice: StateService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.LinerSearchGroupStructure = JSON.parse(JSON.stringify(LinerSearchGroup));
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
      this.getLiner()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initialization(): void {
    this.LinerSearchGroupStructure.forEach((ele, index) => {
      if (this.routeName == 'view')
        ele.disable = true
    })
  }

  getLiner() {
    this.subs.add(this.linerService.getLiner(this.routeId).subscribe({
      next: (value) => {
        this.LinerDetailsData.data = value.data
      }
    }))
  }

  handleSubmit(event: any) {
    let formData = JSON.parse(JSON.stringify(event["formValue"]))
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.linerService.createLiner(formData).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/liner")
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went to wrong!';
            this.toastService.open(message, 'error');
          }
        }))
        break;
      case 'edit':
        this.subs.add(this.linerService.updateLiner(formData, this.routeId).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/liner")
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



