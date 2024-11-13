import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UploadControllerService {

    baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = `${environment.API_BASE_URL}`;
    }


    uploadFile(formData: FormData): Observable<any> {
        // Simulating a delay and then returning a mock response
        return new Observable(observer => {
            setTimeout(() => {
                const imageUrl = `https://dummyimage.com/600x400/000/fff&text=Uploaded+Image`;
                observer.next({ data: { imageUrl } });
                observer.complete();
            }, 1000); // Simulating a delay of 1 second
        });
    }
}