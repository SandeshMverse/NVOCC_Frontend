import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class VoyageService {
    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL;
    }

    getAllVoyages(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}voyage_master`);
    }

    getVoyage(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}voyage_master/${id}`);
    }

    createVoyage(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}voyage_master`, payload);
    }

    updateVoyage(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}voyage_master/${id}`, payload);
    }

    deleteVoyage(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}voyage_master/${id}`);
    }
}
