import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BooksService, RootObject, Book, Results, List } from '../services/books.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books : Book[];
  lists : List[];
  data : any;
  p: number = 1;

  constructor(private _svc : BooksService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this._svc.getList()
    .subscribe(result => {this.data = result;
                        console.log(this.data);
                        this.lists = this.data.results.lists;
                        });
  }

}