import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '@shared/_http/location.service';
import { PortService } from '@shared/_http/port.service';
import { VesselService } from '@shared/_http/vessel.service';
import { VoyageService } from '@shared/_http/voyage.service';
import { VoyageDetailsData, VoyageSearchGroup } from '@shared/configs/voyage-config';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { IFormStructure } from '@shared/models/form-model';
import { RowData } from '@shared/models/table-model';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-icu-voyage',
  templateUrl: './icu-voyage.component.html',
  styleUrl: './icu-voyage.component.scss'
})
export class IcuVoyageComponent implements OnInit, AfterViewInit {

  subs: any;
  routeName: any;
  routeId: any;
  VoyageSearchGroupStructure!: IFormStructure[];
  VoyageDetailsData: RowData = VoyageDetailsData;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private vesselservice: VesselService, private portservice: PortService, private locationservice: LocationService, private toastService: ToastService, private voyageservice: VoyageService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.VoyageSearchGroupStructure = JSON.parse(JSON.stringify(VoyageSearchGroup));
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
      this.getVoyage()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initialization(): void {
    this.VoyageSearchGroupStructure.forEach((ele, index) => {
      if (this.routeName == 'view')
        ele.disable = true
      if (ele.type == 'select')
        this.setOptionValues(ele)
    })
  }

  setOptionValues(ele: any) {
    switch (ele.listName) {
      case "vessel":
        this.subs.add(this.vesselservice.getAllVessels().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break
      case "port":
        this.subs.add(this.portservice.getAllPorts().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break
      case "terminal":
        this.subs.add(this.locationservice.getAllLocations().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break
    }
  }

  getVoyage() {
    this.subs.add(this.voyageservice.getVoyage(this.routeId).subscribe({
      next: (value) => {
        this.VoyageDetailsData.data = value.data
      }
    }))
  }

  handleSubmit(event: any) {
    let formData = JSON.parse(JSON.stringify(event["formValue"]))
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.voyageservice.createVoyage(formData).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/voyage")
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code == err.error_message)?.message ?? 'Something went to wrong!';
            this.toastService.open(message, 'error');
          }
        }))
        break;
      case 'edit':
        this.subs.add(this.voyageservice.updateVoyage(formData, this.routeId).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code == value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/voyage")
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




