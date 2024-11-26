import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '@shared/_http/voyage.service';
import { VoyageDetailsData } from '@shared/configs/voyage-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.component.html',
  styleUrl: './voyage.component.scss'
})
export class VoyageComponent {
  VoyageDetailsData: RowData = VoyageDetailsData;
  subs: any;

  constructor(private router: Router, private voyageservice: VoyageService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.getAllVoyage();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getAllVoyage() {
    this.subs.add(this.voyageservice.getAllVoyages().subscribe({
      next: (value) => {
        this.VoyageDetailsData.data = value.data;
      }
    }))
  }

  handleCreateAction() {
    this.router.navigateByUrl("/voyage/create")
  }

  handleDeleteAction(event: any) {
    this.subs.add(this.voyageservice.deleteVoyage(event).subscribe({
      next: (value) => {
        this.getAllVoyage()
      }
    }))
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/voyage/edit/${event}`)
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/voyage/view/${event}`)
  }
}
