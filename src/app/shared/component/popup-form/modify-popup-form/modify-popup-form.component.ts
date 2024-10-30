import { CommonModule, Location } from '@angular/common';
import { AfterViewInit, Inject, Input, OnInit} from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentControllerService } from '@shared/_http/agent.service';
import { CityService } from '@shared/_http/city.service';
import { CountryService } from '@shared/_http/country.service';
import { StateService } from '@shared/_http/state.service';
import { FormComponent } from '@shared/component/form/form.component';
import { AgentMultiAddressGstSearchGroup } from '@shared/configs/agent-config';
import { CityDetailsData, CityTypeSearchGroup } from '@shared/configs/city-config';
import { YES_NO_LISTDATA } from '@shared/configs/yesNoSelect-config';
import { IFormStructure } from '@shared/models/form';
import { RowData } from '@shared/models/table';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modify-popup-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,FormComponent],
  templateUrl: './modify-popup-form.component.html',
  styleUrl: './modify-popup-form.component.scss'
})
export class ModifyPopupFormComponent implements OnInit, AfterViewInit {

  subs: any;
  routeName: any;
  routeId: any;

  constructor(private router: Router, private activatedroute: ActivatedRoute,private toastService: ToastService,private countryservice:CountryService,private stateService:StateService,private cityService:CityService,private agentService:AgentControllerService,
    public dialogRef: MatDialogRef<ModifyPopupFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.subs = new Subscription();
    // this.formSearchGroupStructure = JSON.parse(JSON.stringify(AgentMultiAddressGstSearchGroup));
    console.log('this.formSearchGroupStructure = ',this.data);
    // this.activatedroute.url.subscribe(urlSegments => {
    //   this.routeName = urlSegments[0]?.path;
    // });
    // this.activatedroute.paramMap.subscribe(params => {
    //   this.routeId = params.get('id');
    // });
    this.initialization()
  }

  ngAfterViewInit(): void {
    if (this.routeId){}

    if(this.data.formDetailsData?.data?.country_id && this.data.formDetailsData?.data?.city_id){
      this.setCityDataViaCountryId(this.data.formDetailsData?.data?.country_id);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initialization(): void {
    this.data.formSearchGroupStructure.forEach((ele:any) => {
      if (ele.type == 'select')
        this.setOptionValues(ele)
      if (this.routeName == 'view')
        ele.disable = true
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
        this.subs.add(this.stateService.getAllState().subscribe({
          next: (value) => {
            // console.log(' value.data = ', value.data)
            ele.listData = value.data
          }
        }))
        break
      case "office_type":
        this.subs.add(this.agentService.getAllOfficeType().subscribe({
          next: (value) => {
            ele.listData = value.data
          }
        }))
        break
      case "yesno":
        ele.listData = YES_NO_LISTDATA.yesno
        break
    }
  }

  handleSelectValueChange(value: any): void {

    if('city_id' in value){
      return;
    }
    if ('country_id' in value) {
      this.setCityDataViaCountryId(value.country_id);
    }
  }

  setCityDataViaCountryId(id:any){
    this.subs.add(this.cityService.getByCountryId(id).subscribe({
      next: (value) => {
        this.data.formSearchGroupStructure.forEach((elee:any) => {
          if (elee.name == 'city_id') {
            elee.listData = value.data
          }
        })
      },error: (err) => {
      }
    }))
  }

  onSave(): void {
    const result = {
      // Your data to pass back
      someProperty: 'someValue'
    };
    this.dialogRef.close(result);
  }

  // Method to close the dialog without passing any data
  onCancel(): void {
    this.dialogRef.close();
  }

  handleSubmit(event: any) {
    const result = {
      // Your data to pass back
      event: event
    };
    this.dialogRef.close(result);
  }

}




