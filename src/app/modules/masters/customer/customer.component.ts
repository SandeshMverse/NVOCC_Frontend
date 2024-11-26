import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '@shared/_http/customer.service';
import { CustomerDetailsData } from '@shared/configs/customer-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  CustomerDetailsData: RowData = CustomerDetailsData;
  subs: any;

  constructor(private router: Router, private customerservice: CustomerService) { }


  ngOnInit(): void {
    this.subs = new Subscription()
    this.getAllCustomer();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getAllCustomer() {
    this.subs.add(this.customerservice.getAllCustomers().subscribe({
      next: (value) => {
        this.CustomerDetailsData.data = value.data;
      }
    }))
  }

  handleCreateAction() {
    this.router.navigateByUrl("/customer/create")
  }

  handleDeleteAction(event: any) {
    this.subs.add(this.customerservice.deleteCustomer(event).subscribe({
      next: (value) => {
        this.getAllCustomer()
      }
    }))
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/customer/edit/${event}`)
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/customer/view/${event}`)
  }
}
