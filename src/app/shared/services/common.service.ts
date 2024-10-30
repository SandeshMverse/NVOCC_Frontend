import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RoleAndPermissionsControllerService } from "@shared/_http/role-permission.service";
import { EncryptedStorage } from "@shared/utils/encrypted-storage";
import { BehaviorSubject, Observable, Subject } from "rxjs";


@Injectable({
    providedIn: "root"
})

export class CommonDataService {

    roleData: BehaviorSubject<any> = new BehaviorSubject([])

    constructor(private router: Router, private roleandpermissionscontrollerservice: RoleAndPermissionsControllerService) { }

    intializeCommonData() {
        this.getRoleData()
    }

    getRoleData() {
        this.roleandpermissionscontrollerservice.getAllRoles().subscribe({
            next: (value) => {
                this.roleData.next(value.data)
            },
            error: (err) => {
                new EncryptedStorage().clearAll();
                this.router.navigate(['/auth/login'])
            }
        })
    }

    convertTimestamp(timestamp: any) {
        const date = new Date(timestamp);
        const day = date.getDate();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
    
        const formattedDate = `${day} ${month} ${year}`;
    
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
    
        return {
          date: formattedDate,
          time: formattedTime
        };
      }


}