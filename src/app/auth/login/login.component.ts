import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '@shared/_http/login.service';
import { ToastService } from '@shared/services/toast.service';
import { EncryptedStorage } from '@shared/utils/encrypted-storage';
import { GlobalConfig } from '@shared/configs/global-config';
import { HttpErrorResponse } from '@angular/common/http';
import { FeathericonComponent } from '@shared/component/feathericon/feathericon.component';
import { currentUser } from '@shared/utils/current-user';
import { NavmenuService } from '@shared/services/navmenu.service';
import { AuthGuard } from '@shared/guard/auth.guard';
import { PermissionsService } from '@shared/services/permissions.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FeathericonComponent, FormsModule, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public show: boolean = false;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router, private loginservice: LoginService, private toastService: ToastService, public navmenu: NavmenuService,private authGuard:AuthGuard,private permissionsService:PermissionsService) {

    const userData = localStorage.getItem(new GlobalConfig().authToken);
    if (userData?.length != null) {
      this.navmenu.intializeMenu(JSON.parse(currentUser().menu));
      this.router.navigate([new GlobalConfig().dashboardRoute])
    }
    else
      this.router.navigate([new GlobalConfig().loginRoute])

    this.loginForm = this.fb.group({
      user_name: ["", [Validators.required]],
      password: ["", Validators.required],
    });

  }
  showPassword() {
    this.show = !this.show;
  }

  login() {
    this.loginservice.login(this.loginForm.value).subscribe({
      next: (value) => {
        console.log("value "+JSON.stringify(value))
        this.toastService.open("Login Successful", "success")
        new EncryptedStorage().clearAll();
        new EncryptedStorage().setItem(new GlobalConfig().authToken, value.data.token, false)
        new EncryptedStorage().setItem(new GlobalConfig().userDetails, JSON.stringify(value.data.userDetails), false);
        this.authGuard.resetGuard();
        // this.navmenu.intializeMenu(JSON.parse(value.data.userDetails.menu));
        // this.loginservice.getPermissiologin(value.data.userDetails.role_id).subscribe({
        //   next: (permissionsResponse) => {
        //     const permissions = permissionsResponse.data;
        //     new EncryptedStorage().setItem(new GlobalConfig().pagePermissions, JSON.stringify(permissions), false);
             // Assuming you have the menu data stored or accessible here
            const menuData = JSON.parse(value.data.userDetails.menu); // Update this according to your actual implementation
            
            const filteredMenu = menuData
            new EncryptedStorage().setItem(new GlobalConfig().userDetails, JSON.stringify({
              ...value.data.userDetails,
              menu: JSON.stringify(filteredMenu)  // Update with filtered menu
            }), false);
            // console.log('filteredMenu = ',filteredMenu);

            this.navmenu.intializeMenu(filteredMenu);
            // this.permissionsService.loadPermissions();
            this.router.navigate([new GlobalConfig().dashboardRoute])

        // },error:(err)=>{
        //   this.toastService.open("'Access denied : Permission Not Granted", "error");
        //   new EncryptedStorage().clearAll();
        // }})
      }, error: (err) => {
        switch (err instanceof HttpErrorResponse) {
          case err.status === 401:
            this.toastService.open("UnAuthorized User", "error")
            break;
          case err.status === 500:
            this.toastService.open("Internal Server Error", "error")
            break;
          case err.status === 404:
            this.toastService.open("Not Found", "error")
            break;
          case err.status === 400:
            this.toastService.open("Bad_Request", "error")
            break;
          default:
            this.toastService.open("Something went wrong", "error")
            break
        }
      }
    })
  }

  private filterMenuByPermissions(menu: any[], permissions: any[]) {
    // Create a map of page URLs to permissions for quick lookup
    const permissionMap = new Map();
    permissions.forEach(p => permissionMap.set(p.page_url, p));

    // Recursive function to filter menu items
    function filterItems(items: any[]): any[] {
      return items
        .filter(item => {
          if (item.path) {
            // If item is a link, check if it's in the permission map
            return permissionMap.has(item.path);
          } else if (item.children) {
            // If item has children, recursively filter them
            item.children = filterItems(item.children);
            // Show this item only if it has at least one valid child
            return item.children.length > 0;
          }
          return false;
        });
    }

    return filterItems(menu);
  }

  forgotPaassword(){
    this.router.navigate(['/auth/forgot-password'])
  }

}
