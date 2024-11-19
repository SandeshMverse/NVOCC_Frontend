import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusMasterService } from '@shared/_http/status.service';
import { statusData } from '@shared/configs/status-config';
import { RowData } from '@shared/models/table-model';
import { LoaderService } from '@shared/services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {

  statusData: RowData = statusData;
  subs: any;

  constructor(private router: Router, private statusmasterservice: StatusMasterService, private loaderService: LoaderService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.getAllstatus();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getAllstatus() {
    this.loaderService.showLoader();
    this.subs.add(this.statusmasterservice.getAllstatus().subscribe({
      next: (value) => {
        this.loaderService.hideLoader();
        this.statusData.data = value.data;
      }, error: () => {
        this.loaderService.hideLoader();
      }
    }))
  }

  handleCreateAction() {
    this.router.navigateByUrl("/status/create")
  }

  handleDeleteAction(event: any) {
    this.loaderService.showLoader();
    this.subs.add(this.statusmasterservice.deletestatus(event).subscribe({
      next: (value) => {
        this.loaderService.hideLoader();
        this.getAllstatus();
      }, error: () => {
        this.loaderService.hideLoader();
      }
    }))
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/status/edit/${event}`)
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/status/view/${event}`)
  }

}


