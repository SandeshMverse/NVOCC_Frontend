import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '@shared/_http/country.service';
import { LocationService } from '@shared/_http/location.service';
import { LocationDetailsData, LocationSearchGroup } from '@shared/configs/location-control-config';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { IFormStructure } from '@shared/models/form-model';
import { RowData } from '@shared/models/table-model';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-icu-location',
  templateUrl: './icu-location.component.html',
  styleUrl: './icu-location.component.scss'
})
export class IcuLocationComponent implements OnInit, AfterViewInit {

  subs: any;
  routeName: any;
  routeId: any;
  LocationSearchGroupStructure!: IFormStructure[];
  LocationDetailsData: RowData = LocationDetailsData;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private locationservice: LocationService, private toastService: ToastService, private countryservice: CountryService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.LocationSearchGroupStructure = JSON.parse(JSON.stringify(LocationSearchGroup));
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
      this.getLocation()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initialization(): void {
    this.LocationSearchGroupStructure.forEach((ele, index) => {
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
    }
  }

  getLocation() {
    this.subs.add(this.locationservice.getLocation(this.routeId).subscribe({
      next: (value) => {
        this.LocationDetailsData.data = value.data
      }
    }))
  }

  handleSubmit(event: any) {
    let formData = JSON.parse(JSON.stringify(event["formValue"]))
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.locationservice.createLocation(formData).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/location")
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went to wrong!';
            this.toastService.open(message, 'error');
          }
        }))
        break;
      case 'edit':
        this.subs.add(this.locationservice.updateLocation(formData, this.routeId).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/location")
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




