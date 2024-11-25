import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class LocationService {
    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL;
    }

    getAllLocations(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}location_master`);
    }

    getLocation(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}location_master/${id}`);
    }

    createLocation(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}location_master`, payload);
    }

    updateLocation(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}location_master/${id}`, payload);
    }

    deleteLocation(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}location_master/${id}`);
    }
}
