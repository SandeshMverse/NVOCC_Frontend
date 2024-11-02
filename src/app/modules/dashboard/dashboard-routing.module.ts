import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipleDashboardComponent } from './principle-dashboard/principle-dashboard.component';
import { RoleGuard } from '@shared/guard/role.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: PrincipleDashboardComponent, canActivate: [RoleGuard] },
  { path: 'principle-dashboard',data: {pageId: 2}, component: PrincipleDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
