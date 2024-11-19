import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '@shared/_http/pages.service';
import { PageDetailsData } from '@shared/configs/access-control-config';
import { RowData } from '@shared/models/table-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit, OnDestroy {
  pageDetailsData: RowData = PageDetailsData;
  subs: Subscription;

  constructor(private router: Router, private pageService: PagesService) {
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.getAllPages();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getAllPages() {
    this.subs.add(this.pageService.getAllPages().subscribe({
      next: (value) => {
        console.log('value = ', value.data);
        this.pageDetailsData.data = value.data;
      }
    }));
  }

  handleCreateAction() {
    this.router.navigateByUrl("/pages/create");
  }

  handleDeleteAction(event: any) {
    // Implement delete action
  }

  handleEditAction(event: any) {
    this.router.navigateByUrl(`/pages/edit/${event}`);
  }

  handleViewAction(event: any) {
    this.router.navigateByUrl(`/pages/view/${event}`);
  }
}

