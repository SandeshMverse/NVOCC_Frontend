import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from '@shared/_http/vessel.service';
import { VesselDetailsData } from '@shared/configs/vessel-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.component.html',
  styleUrl: './vessel.component.scss'
})
export class VesselComponent {
  VesselDetailsData: RowData = VesselDetailsData;
  subs: any;

  constructor(private router: Router, private vesselservice: VesselService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.getAllVessel();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getAllVessel() {
    this.subs.add(this.vesselservice.getAllVessels().subscribe({
      next: (value) => {
        this.VesselDetailsData.data = value.data;
      }
    }))
  }


  handleCreateAction() {
    this.router.navigateByUrl("/vessel/create")
  }

  handleDeleteAction(event: any) {
    this.subs.add(this.vesselservice.deleteVessel(event).subscribe({
      next: (value) => {
        this.getAllVessel()
      }
    }))
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/vessel/edit/${event}`)
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/vessel/view/${event}`)
  }
}

