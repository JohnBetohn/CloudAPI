import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BeerService {

  constructor(private _http: HttpClient) { }

  getBarList(): Observable<BarObject[]> {
    return this._http.get<BarObject[]>('http://beermapping.com/webservice/loccity/%2076704dcbd070f7a2ef14859fcbc1d541/antwerp&s=json ');
  }

  getReview(id): Observable<ReviewObject> {
    return this._http.get<ReviewObject>('http://beermapping.com/webservice/locscore/%2076704dcbd070f7a2ef14859fcbc1d541/'+id+'s=json')
  }

}

export interface BarObject {
  id: number;
  name: string;
  status: string;
  reviewlink: string;
  proxylink: string;
  blogmap: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  url: string;
  overall: string;
  imagecount: string;
}


export interface ReviewObject {
  overall: number;
  selection: string;
  service: string;
  atmosphere: string;
  food: string;
  reviewcount: string;
  fbscore: string;
  fbcount: string;
}


