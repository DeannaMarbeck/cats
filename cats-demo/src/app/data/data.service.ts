import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {ApiService} from './api.service';
import {Cat, GalleryCat} from './types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _catData: BehaviorSubject<Cat[]> = new BehaviorSubject<Cat[]>([]);
  private _catsInGallery: BehaviorSubject<GalleryCat[]> = new BehaviorSubject<GalleryCat[]>([]);

  constructor( private http: HttpClient, private api: ApiService ) { }

  // Fetch data from the api
  public getCat(): any {
    this.api.getCat()
      .subscribe(res => {
        this._catData.next(res[0]);
      });
    return;
  }
  // Store the current cats in the gallery
  public updateGallery(catsInGallery: GalleryCat[]) {
    this._catsInGallery.next(catsInGallery);
    return this._catsInGallery;
  }

  public get catData() {
    return this._catData;
  }
  public get catsInGallery() {
    return this._catsInGallery;
  }

}
