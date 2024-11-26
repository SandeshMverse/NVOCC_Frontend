import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '@shared/_http/city.service';
import { CountryService } from '@shared/_http/country.service';
import { CustomerService } from '@shared/_http/customer.service';
import { StateService } from '@shared/_http/state.service';
import { CustomerDetailsData, CustomerSearchGroup } from '@shared/configs/customer-config';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { IFormStructure } from '@shared/models/form-model';
import { RowData } from '@shared/models/table-model';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-icu-customer',
  templateUrl: './icu-customer.component.html',
  styleUrl: './icu-customer.component.scss'
})
export class IcuCustomerComponent implements OnInit, AfterViewInit {

  subs: any;
  routeName: any;
  routeId: any;
  CustomerSearchGroupStructure!: IFormStructure[];
  CustomerDetailsData: RowData = CustomerDetailsData;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private cityservice: CityService, private toastService: ToastService, private countryservice: CountryService, private stateservice: StateService, private customerservice: CustomerService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.CustomerSearchGroupStructure = JSON.parse(JSON.stringify(CustomerSearchGroup));
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
      this.getCustomer()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initialization(): void {
    this.CustomerSearchGroupStructure.forEach((ele, index) => {
      if (this.routeName == 'view')
        ele.disable = true
      if (ele.type == 'select')
        this.setOptionValues(ele)
    })
  }

  setOptionValues(ele: any) {
    switch (ele.listName) {
      case "country":
        this.subs.add(this.countryservice.getAllCountry().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break
      case "state":
        this.subs.add(this.stateservice.getAllState().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break
      case "city":
        this.subs.add(this.cityservice.getAllCity().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break
    }
  }

  getCustomer() {
    this.subs.add(this.customerservice.getCustomer(this.routeId).subscribe({
      next: (value) => {
        this.CustomerDetailsData.data = value.data
      }
    }))
  }

  handleSubmit(event: any) {
    let formData = JSON.parse(JSON.stringify(event["formValue"]))
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.customerservice.createCustomer(formData).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/customer")
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went to wrong!';
            this.toastService.open(message, 'error');
          }
        }))
        break;
      case 'edit':
        this.subs.add(this.customerservice.updateCustomer(formData, this.routeId).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/customer")
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


