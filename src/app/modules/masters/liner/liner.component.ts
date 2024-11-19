import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinerService } from '@shared/_http/liner.service';
import { LinerDetailsData } from '@shared/configs/liner-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liner',
  templateUrl: './liner.component.html',
  styleUrl: './liner.component.scss'
})
export class LinerComponent {
  LinerDetailsData: RowData = LinerDetailsData;
  subs: any;

  constructor(private router: Router, private linerService: LinerService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.getAllLiner();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getAllLiner() {
    this.subs.add(this.linerService.getAllLiners().subscribe({
      next: (value) => {
        this.LinerDetailsData.data = value.data;
        console.log("this.LinerDetailsData.data "+JSON.stringify(this.LinerDetailsData.data))
      }
    }))
  }


  handleCreateAction() {
    this.router.navigateByUrl("/liner/create")
  }

  handleDeleteAction(event: any) {
    this.subs.add(this.linerService.deleteLiner(event).subscribe({
      next: (value) => {
        this.getAllLiner()
      }
    }))
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/liner/edit/${event}`)
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/liner/view/${event}`)
  }
}

