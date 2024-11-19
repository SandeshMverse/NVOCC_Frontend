import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LinerService {

    baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL;
    }

    getAllLiners(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}liner_master`);
    }

    getLiner(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}liner_master/${id}`);
    }

    createLiner(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}liner_master`, payload);
    }

    updateLiner(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}liner_master/${id}`, payload);
    }

    deleteLiner(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}liner_master/${id}`);
    }

}
