import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class PortService {
    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL;
    }

    getAllPorts(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}port_master`);
    }

    getPort(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}port_master/${id}`);
    }

    createPort(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}port_master`, payload);
    }

    updatePort(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}port_master/${id}`, payload);
    }

    deletePort(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}port_master/${id}`);
    }
}
