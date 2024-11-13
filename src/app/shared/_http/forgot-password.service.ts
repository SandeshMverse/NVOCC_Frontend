import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { IForgotPass, ILogin } from "@shared/models/login-model";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class ForgotPasswordService {
    private baseUrl: string

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.API_BASE_URL}login`
    }

    sendOtp(email: IForgotPass): Observable<any> {
        return this.http.post(`${this.baseUrl}/resetOtp`, email)
    }

    verifyOtp(userInfo: IForgotPass): Observable<any> {
        return this.http.post(`${this.baseUrl}/recheckOtp`, userInfo)
    }

    resetPassword(userInfo: IForgotPass): Observable<any> {
        return this.http.post(`${this.baseUrl}/update/password`, userInfo)
    }

    resetUpdatePassword(userInfo: IForgotPass): Observable<any> {
        return this.http.put(`${this.baseUrl}/reset/password`, userInfo)
    }

}