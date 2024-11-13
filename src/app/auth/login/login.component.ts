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
        this.toastService.open("Login Successful", "success")
        new EncryptedStorage().clearAll();
        new EncryptedStorage().setItem(new GlobalConfig().authToken, value.data.token, false)
        new EncryptedStorage().setItem(new GlobalConfig().userDetails, JSON.stringify(value.data.userDetails), false);
        this.authGuard.resetGuard();
        this.loginservice.getPermissiologin(value.data.userDetails.role_id).subscribe({
          next: (permissionsResponse) => {
            const permissions = permissionsResponse.data;
            new EncryptedStorage().setItem(new GlobalConfig().pagePermissions, JSON.stringify(permissions), false);
            const menuData = JSON.parse(value.data.userDetails.menu); 
            // const filteredMenu = this.filterMenuByPermissions(menuData, permissions);
            const filteredMenu = [
              {
                "active" : false,
                "icon" : "Home",
                "id" : 1,
                "level" : 1,
                "path" : "/dashboard",
                "title" : "Dashboard",
                "type" : "link"
              },
              {
                "active" : false,
                "badge" : true,
                "children" : [
                  {
                    "path" : "/permission",
                    "title" : "Permission",
                    "type" : "link"
                  },
                  {
                    "path" : "/pages",
                    "title" : "Pages",
                    "type" : "link"
                  },
                  {
                    "path" : "/page-permission",
                    "title" : "Pages Permission",
                    "type" : "link"
                  },
                  {
                    "path" : "/role",
                    "title" : "Role",
                    "type" : "link"
                  },
                  {
                    "path" : "/role-permission",
                    "title" : "Role Page permission",
                    "type" : "link"
                  }
                ],
                "icon" : "Filter",
                "id" : 1,
                "level" : 1,
                "title" : "Access Control",
                "type" : "sub"
              },
              {
                "active" : false,
                "children" : [
                  {
                    "path" : "/ship",
                    "title" : "Ship",
                    "type" : "link"
                  },
                  {
                    "path" : "/port",
                    "title" : "Port",
                    "type" : "link"
                  },
                  {
                    "path" : "/berth",
                    "title" : "Berth",
                    "type" : "link"
                  },
                  {
                    "active" : false,
                    "children" : [
                      {
                        "path" : "/vendor",
                        "title" : "Vendor",
                        "type" : "link"
                      },
                      {
                        "path" : "/vendor-type",
                        "title" : "Vendor Type",
                        "type" : "link"
                      },
                      {
                        "path" : "/vendor-service",
                        "title" : "Vendor Services",
                        "type" : "link"
                      }
                    ],
                    "level" : 2,
                    "title" : "Vendor",
                    "type" : "sub"
                  },
                  {
                    "path" : "/company",
                    "title" : "Company",
                    "type" : "link"
                  },
                  {
                    "active" : false,
                    "children" : [
                      {
                        "path" : "/agent",
                        "title" : "Customer/agent",
                        "type" : "link"
                      },
                      {
                        "path" : "/agent-type",
                        "title" : "Customer Type",
                        "type" : "link"
                      }
                    ],
                    "level" : 2,
                    "title" : "Customer",
                    "type" : "sub"
                  },
                  {
                    "path" : "/employee",
                    "title" : "Employee Master",
                    "type" : "link"
                  },
                  {
                    "path" : "/user-master",
                    "title" : "Users Master",
                    "type" : "link"
                  },
                  {
                    "path" : "/principal",
                    "title" : "Principal",
                    "type" : "link"
                  },
                  {
                    "path" : "/kyc-type",
                    "title" : "Kyc Master",
                    "type" : "link"
                  },
                  {
                    "active" : false,
                    "children" : [
                      {
                        "path" : "/service",
                        "title" : "Service",
                        "type" : "link"
                      },
                      {
                        "path" : "/service-type",
                        "title" : "Service Type",
                        "type" : "link"
                      },
                      {
                        "path" : "/service-subtype",
                        "title" : "Service Sub Type",
                        "type" : "link"
                      },
                      {
                        "path" : "/service-subtype-unit",
                        "title" : "Service Sub Type Unit",
                        "type" : "link"
                      },
                      {
                        "path" : "/charge-type",
                        "title" : "Charge Type",
                        "type" : "link"
                      },
                      {
                        "path" : "/unit",
                        "title" : "Unit",
                        "type" : "link"
                      }
                    ],
                    "level" : 2,
                    "title" : "Services",
                    "type" : "sub"
                  },
                  {
                    "active" : false,
                    "children" : [
                      {
                        "path" : "/sac",
                        "title" : "SAC",
                        "type" : "link"
                      },
                      {
                        "path" : "/sac-details",
                        "title" : "SAC Details",
                        "type" : "link"
                      }
                    ],
                    "level" : 2,
                    "title" : "Sac",
                    "type" : "sub"
                  },
                  {
                    "path" : "/status",
                    "title" : "Status",
                    "type" : "link"
                  },
            {
                    "path" : "/currency",
                    "title" : "Currency",
                    "type" : "link"
                  },
                  {
                    "active" : false,
                    "children" : [
                      {
                        "path" : "/country",
                        "title" : "Country",
                        "type" : "link"
                      },
                      {
                        "path" : "/state",
                        "title" : "State",
                        "type" : "link"
                      },
                      {
                        "path" : "/city",
                        "title" : "City",
                        "type" : "link"
                      }
                    ],
                    "level" : 2,
                    "title" : "Country/State/City",
                    "type" : "sub"
                  }
                ],
                "icon" : "Document",
                "id" : 2,
                "level" : 1,
                "title" : "Master",
                "type" : "sub"
              },
              {
                "active" : false,
                "children" : [
                  {
                    "path" : "/port-call",
                    "title" : "Port Call",
                    "type" : "link"
                  },
                  {
                    "path" : "/drs",
                    "title" : "DRS (Daily Record Of Services)",
                    "type" : "link"
                  }
                ],
                "horizontalList" : true,
                "icon" : "Swap",
                "id" : 3,
                "level" : 1,
                "title" : "Operation",
                "type" : "sub"
              },
              {
                "active" : false,
                "children" : [
                  {
                    "path" : "/contract",
                    "title" : "Contract Management",
                    "type" : "link"
                  }
                ],
                "icon" : "Paper",
                "id" : 6,
                "level" : 1,
                "title" : "Contract",
                "type" : "sub"
              },
              {
                "active" : false,
                "children" : [
                  {
                    "path" : "/contract-report",
                    "title" : "Contract Reports",
                    "type" : "link"
                  },
                  {
                    "path" : "/rate-report",
                    "title" : "Rate Reports",
                    "type" : "link"
                  },
                  {
                    "path" : "/audit-trails",
                    "title" : "Audit Trails",
                    "type" : "link"
                  }
                ],
                "icon" : "Activity",
                "id" : 8,
                "level" : 1,
                "title" : "Report",
                "type" : "sub"
              }
            ]
            new EncryptedStorage().setItem(new GlobalConfig().userDetails, JSON.stringify({
              ...value.data.userDetails,
              menu: JSON.stringify(filteredMenu) 
            }), false);

            this.navmenu.intializeMenu(filteredMenu);
            this.permissionsService.loadPermissions();
            this.router.navigate([new GlobalConfig().dashboardRoute])

        },error:(err)=>{
          this.toastService.open("'Access denied : Permission Not Granted", "error");
          new EncryptedStorage().clearAll();
        }})
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
