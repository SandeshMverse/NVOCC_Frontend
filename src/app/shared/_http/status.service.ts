import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { currentUser } from "@shared/utils/current-user";
import { Observable } from 'rxjs';

export interface StatusResponse {
    data: any;
}

@Injectable({
    providedIn: "root"
})

export class StatusMasterService {
    private baseUrl: string

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL
    }

    getAllstatus(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}status_master`);
    }

    getStatusByParent(id: number) {
        return this.httpClient.get<StatusResponse>(`${this.baseUrl}status_master/parentId/${id}`);
    }

    getstatus(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}status_master/${id}`);
    }

    createstatus(payload: any): Observable<any> {
        payload['created_by'] = currentUser().user_id
        return this.httpClient.post(`${this.baseUrl}status_master`, payload);
    }

    updatestatus(payload: any, id: any): Observable<any> {
        payload['modified_by'] = currentUser().user_id
        return this.httpClient.put(`${this.baseUrl}status_master/${id}`, payload);
    }

    deletestatus(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}status_master/${id}`);
    }

}