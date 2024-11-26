import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class CustomerService {
    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = environment.API_BASE_URL;
    }

    getAllCustomers(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}customer_master`);
    }

    getCustomer(id: any): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}customer_master/${id}`);
    }

    createCustomer(payload: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}customer_master`, payload);
    }

    updateCustomer(payload: any, id: any): Observable<any> {
        return this.httpClient.put(`${this.baseUrl}customer_master/${id}`, payload);
    }

    deleteCustomer(id: any): Observable<any> {
        return this.httpClient.delete(`${this.baseUrl}customer_master/${id}`);
    }
}
