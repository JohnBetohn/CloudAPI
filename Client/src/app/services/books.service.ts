import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BooksService {

    constructor(private _http: HttpClient) { }
    
    getList(loc: number): any {
        return this._http.get<any>('https://api.nytimes.com/svc/books/v3/lists/names.json?offset='+loc+'&api-key=e0a83258b7ac4925bc7bf1848b929a56');
    }

    getBooks(list: string): any {
        return this._http.get<any>('https://api.nytimes.com/svc/books/v3/lists.json?api-key=e0a83258b7ac4925bc7bf1848b929a56&list='+ list)
    }

    findbyArtist(name: string): any {
        return this._http.get<any>('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?author='+ name +'&api-key=e0a83258b7ac4925bc7bf1848b929a56')
    }

    // seperate call params with &
}