import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {ApiService} from './api.service';
import {Cat} from './types';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private catData: BehaviorSubject<Cat[]> = new BehaviorSubject<Cat[]>([]);
  constructor( private http: HttpClient, private api: ApiService ) {
    this.getCat();
  }

  public getCat(): any {
    this.api.getCat()
      .subscribe(res => {
        console.log(res[0]);
        this.catData.next(res[0]);
      });
    return;
  }

  public get cat() {
    return this.catData;
  }

}
