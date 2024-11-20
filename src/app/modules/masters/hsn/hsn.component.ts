
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HSNService } from '@shared/_http/hsn.service';
import { HSNDetailsData } from '@shared/configs/hsn-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hsn',
  templateUrl: './hsn.component.html',
  styleUrl: './hsn.component.scss'
})
export class HsnComponent {
  HSNDetailsData: RowData = HSNDetailsData;
  subs: any;

  constructor(private router: Router, private hsnservice: HSNService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.getAllHSN();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getAllHSN() {
    this.subs.add(this.hsnservice.getAllHSN().subscribe({
      next: (value) => {
        this.HSNDetailsData.data = value.data;
      }
    }))
  }


  handleCreateAction() {
    this.router.navigateByUrl("/hsn/create")
  }

  handleDeleteAction(event: any) {
    this.subs.add(this.hsnservice.deleteHSN(event).subscribe({
      next: (value) => {
        this.getAllHSN()
      }
    }))
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/hsn/edit/${event}`)
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/hsn/view/${event}`)
  }
}

