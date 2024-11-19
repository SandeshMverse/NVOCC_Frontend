import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class CityService {
    private baseUrl: string

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL
    }

    getAllCity(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}city`);
    }

    getCity(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}city/${id}`);
    }

    getByCountryId(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}city/byCountry/${id}`);
    }

    createCity(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}city`, payload);
    }

    updateCity(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}city/${id}`, payload);
    }

    deleteCity(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}city/${id}`);
    }
}