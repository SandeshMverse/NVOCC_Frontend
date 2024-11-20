import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class HSNService {
    private baseUrl: string

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL
    }

    getAllHSN(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}hsn_master`);
    }

    getHSN(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}hsn_master/${id}`);
    }

    createHSN(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}hsn_master`, payload);
    }

    updateHSN(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}hsn_master/${id}`, payload);
    }

    deleteHSN(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}hsn_master/${id}`);
    }
}