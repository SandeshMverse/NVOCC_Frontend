import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { currentUser } from "@shared/utils/current-user";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class PagePermissionService {
    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL;
    }

    getAllPagePermissions(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}page-permissions`);
    }

    updateCreatePagePermission(payload: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}page-permissions/create/update`, payload);
    }

    getRoleByPageId(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}page-permissions/getByPageId/AllPermission/${id}`);
    }


    getPagePermission(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}page-permissions/${id}`);
    }

    createPagePermission(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}page-permissions`, payload);
    }

    updatePagePermission(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}page-permissions/${id}`, payload);
    }

    deletePagePermission(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}page-permissions/${id}`);
    }
}
