import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { NgForm } from '@angular/forms';
import { BooksService } from '../services/books.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books : any[];
  lists : any[];
  authorbooks : any[];
  amountOfLists : number;
  loc : number = 0;
  p: number = 1;
  selectedEntry;
  _search : string;

  constructor(private _svc : BooksService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this._svc.getList(this.loc)
    .subscribe(result => {this.lists = result.results; console.log(this.lists); this.amountOfLists = this.lists.length});
  }

  selectEntry(entry){
    this.selectedEntry = entry.list_name_encoded;
    console.log(this.selectedEntry);
    this._svc.getBooks(this.selectedEntry).subscribe(result => {this.books = result.results});
  }

  get Search() {
    return this._search;
  }

  set Search(value: string) {
    this._search = value;
    console.log("helllo");
    this._svc.findbyArtist(this._search).subscribe(result => {this.authorbooks = result.results})
  }

  /* paginate(dir : number){
    if(this.loc < this.amountOfLists - 20 && dir == 1){
      this.loc = this.loc + 20;
      this._svc.getList(this.loc);
      console.log(this.loc);
    }

    if(this.loc >= 20 && dir == 0){
      this.loc = this.loc - 20;
      this._svc.getList(this.loc);
      console.log(this.loc);
    }
  } */
}