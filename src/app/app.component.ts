import { Component, OnInit } from '@angular/core';
import { RoleAndPermissionsControllerService } from '@shared/_http/role-permission.service';
import { SpinnerComponent } from '@shared/component/spinner/spinner.component';
import { SharedImportsModule } from '@shared/modules/shared-imports.module';
import { CommonDataService } from '@shared/services/common.service';
import { LoaderService } from '@shared/services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedImportsModule,SpinnerComponent],
  providers: [CommonDataService,LoaderService, RoleAndPermissionsControllerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isLoading$ = this.loaderService.isLoading$;
  private isLoadingSubscription: Subscription;

  constructor(private loaderService:LoaderService) { }

  ngOnInit(): void {
    this.isLoadingSubscription = this.isLoading$.subscribe(isLoading => {
    });
  }

  ngOnDestroy(): void {
    this.isLoadingSubscription.unsubscribe();
  }

}
