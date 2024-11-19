import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '@shared/_http/pages.service';
import { PageDetailsData, PageFormStructure } from '@shared/configs/access-control-config';
import { responseMessages } from '@shared/constants/response-msgs.constant';
import { IFormStructure } from '@shared/models/form-model';
import { RowData } from '@shared/models/table-model';
import { ToastService } from '@shared/services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-icu-pages',
  templateUrl: './icu-pages.component.html',
  styleUrl: './icu-pages.component.scss'
})
export class IcuPagesComponent implements OnInit, AfterViewInit {

  subs: Subscription;
  routeName: string;
  PageFormStructure!: IFormStructure[];
  PageDetailsData: RowData = PageDetailsData;
  routeId: string | null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageService: PagesService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.subs = new Subscription();
    this.PageFormStructure = JSON.parse(JSON.stringify(PageFormStructure));
    this.activatedRoute.url.subscribe(urlSegments => {
      this.routeName = urlSegments[0]?.path;
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.routeId = params.get('id');
    });
    this.initialization();
  }

  ngAfterViewInit(): void {
    if (this.routeId)
      this.getPage();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  initialization(): void {
    this.PageFormStructure.forEach((ele, index) => {
      if (this.routeName === 'view')
        ele.disable = true;
    });
  }

  getPage() {
    this.subs.add(this.pageService.getPage(this.routeId).subscribe({
      next: (value) => {
        this.PageDetailsData.data = value.data;
      }
    }));
  }

  handleSubmit(event: any) {
    let formData = JSON.parse(JSON.stringify(event["formValue"]));
    switch (this.routeName) {
      case 'create':
        this.subs.add(this.pageService.createPages(formData).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code === value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/pages");
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code === err.error_message)?.message ?? 'Something went wrong!';
            this.toastService.open(message, 'error');
          }
        }));
        break;
      case 'edit':
        this.subs.add(this.pageService.updatePage(formData, this.routeId).subscribe({
          next: (value) => {
            const message = responseMessages.codes.find(item => item.code === value.error_message)?.message ?? '';
            this.toastService.open(message, 'success');
            this.router.navigateByUrl("/pages");
          },
          error: (err) => {
            const message = responseMessages.codes.find(item => item.code === err.error_message)?.message ?? 'Something went wrong!';
            this.toastService.open(message, 'error');
          }
        }));
        break;
    }
  }
}

