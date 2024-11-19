import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.API_BASE_URL;
  }

  getAllRoles(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}roles`);
  }

  getRole(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}roles/${id}`);
  }

  createRole(payload: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}roles`, payload);
  }

  updateRole(payload: any, id: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}roles/${id}`, payload);
  }

  deleteRole(id: any): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}roles/${id}`);
  }

}
