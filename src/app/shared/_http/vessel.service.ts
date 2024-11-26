import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class VesselService {
    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL;
    }

    getAllVessels(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}vessel_master`);
    }

    getVessel(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}vessel_master/${id}`);
    }

    createVessel(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}vessel_master`, payload);
    }

    updateVessel(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}vessel_master/${id}`, payload);
    }

    deleteVessel(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}vessel_master/${id}`);
    }
}
