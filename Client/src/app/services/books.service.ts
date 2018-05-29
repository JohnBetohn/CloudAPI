import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BooksService {

    constructor(private _http: HttpClient) { }
    
    getList(): Observable<RootObject> {
    return this._http.get<RootObject>('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=e0a83258b7ac4925bc7bf1848b929a56');
    }
}

export interface BuyLink {
    name: string;
    url: string;
}

export interface Book {
    age_group: string;
    amazon_product_url: string;
    article_chapter_link: string;
    author: string;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    book_review_link: string;
    contributor: string;
    contributor_note: string;
    created_date: string;
    description: string;
    first_chapter_link: string;
    price: number;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    rank: number;
    rank_last_week: number;
    sunday_review_link: string;
    title: string;
    updated_date: string;
    weeks_on_list: number;
    buy_links: BuyLink[];
}

export interface List {
    list_id: number;
    list_name: string;
    list_name_encoded: string;
    display_name: string;
    updated: string;
    list_image: string;
    list_image_width: number;
    list_image_height: number;
    books: Book[];
}

export interface Results {
    bestsellers_date: string;
    published_date: string;
    published_date_description: string;
    previous_published_date: string;
    next_published_date: string;
    lists: List[];
}

export interface RootObject {
    status: string;
    copyright: string;
    num_results: number;
    results: Results;
}

