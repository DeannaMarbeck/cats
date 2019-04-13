import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  public getCat(): Observable<any>{
    console.log('getting cat data', environment.apiBaseUrl);
    return this.http.get<any>(`${environment.apiBaseUrl}`)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.formatErrors)
      );
  }
  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
