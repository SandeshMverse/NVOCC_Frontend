import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class RoleAndPermissionsControllerService {
    baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL;
    }

    getAllRoles(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}roles`);
    }

    getAllPageRolesPermission(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}role-page-permissions`);
        }

    getRolePagePermission(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}role-page-permissions/${id}`);
    }

    createRolePagePermission(payload: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}role-page-permissions`, payload);
    }

    updateRolePagePermission(payload: any, id: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}role-page-permissions/${id}`, payload);
    }

    deleteRolePagePermission(id: any): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}role-page-permissions/${id}`);
    }
    
}