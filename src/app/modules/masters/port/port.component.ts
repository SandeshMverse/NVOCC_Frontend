import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortService } from '@shared/_http/port.service';
import { PortDetailsData } from '@shared/configs/port-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrl: './port.component.scss'
})
export class PortComponent {
  PortDetailsData: RowData = PortDetailsData;
  subs: any;

  constructor(private router: Router, private portservice: PortService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.getAllPort();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getAllPort() {
    this.subs.add(this.portservice.getAllPorts().subscribe({
      next: (value) => {
        this.PortDetailsData.data = value.data;
      }
    }))
  }

  handleCreateAction() {
    this.router.navigateByUrl("/port/create")
  }

  handleDeleteAction(event: any) {
    this.subs.add(this.portservice.deletePort(event).subscribe({
      next: (value) => {
        this.getAllPort()
      }
    }))
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/port/edit/${event}`)
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/port/view/${event}`)
  }
}
