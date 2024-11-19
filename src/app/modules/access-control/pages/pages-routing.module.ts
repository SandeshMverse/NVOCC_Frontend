import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcuPagesComponent } from './icu-pages/icu-pages.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    data: {
        title: "Pages",
        breadcrumb: "Pages",
    }
  },
  {
      path: 'create', component: IcuPagesComponent,
      data: {
          title: "Create Pages",
          breadcrumb: "Create Pages",
      }
  },
  {
    path: 'edit/:id', component: IcuPagesComponent,
    data: {
        title: "Edit Pages",
        breadcrumb: "Edit Pages",
    }
  },
  {
      path: 'view/:id', component: IcuPagesComponent,
      data: {
          title: "View Pages",
          breadcrumb: "View Pages",
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
