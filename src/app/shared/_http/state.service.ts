import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class StateService {
    private baseUrl: string

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL
    }

    getAllState(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}state`);
    }

    getState(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}state/${id}`);
    }

    createState(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}state`, payload);
    }

    updateState(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}state/${id}`, payload);
    }

    deleteState(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}state/${id}`);
    }
}