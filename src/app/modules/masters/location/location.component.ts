import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '@shared/_http/location.service';
import { LocationDetailsData } from '@shared/configs/location-control-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  LocationDetailsData: RowData = LocationDetailsData;
  subs: any;

  constructor(private router: Router, private locationservice: LocationService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.getAllLocation();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getAllLocation() {
    this.subs.add(this.locationservice.getAllLocations().subscribe({
      next: (value) => {
        this.LocationDetailsData.data = value.data;
      }
    }))
  }

  handleCreateAction() {
    this.router.navigateByUrl("/location/create")
  }

  handleDeleteAction(event: any) {
    this.subs.add(this.locationservice.deleteLocation(event).subscribe({
      next: (value) => {
        this.getAllLocation()
      }
    }))
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/location/edit/${event}`)
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/location/view/${event}`)
  }
}
