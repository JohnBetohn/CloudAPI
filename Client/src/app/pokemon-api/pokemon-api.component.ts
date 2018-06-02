import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService, Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.scss']
})
export class PokemonApiComponent implements OnInit {

  amountOfLists : number;
  loc : number = 0;
  pokemons : Pokemon[];
  _name : string;
  _type : string;
  _id : string;

  constructor(private _svc : PokemonService) { }

  ngOnInit() {
    this._svc.getallPokemon(0).subscribe(result => { this.pokemons = result; console.log(this.pokemons)})
  }



  paginate(dir : number){
    if(dir == 1){
      this.loc = this.loc + 1;
      this._svc.getallPokemon(this.loc).subscribe(result =>{ this.pokemons = result});
      console.log(this.loc);
    }

    if(dir == 0 && this.loc > 0){
      this.loc = this.loc - 1;
      this._svc.getallPokemon(this.loc).subscribe(result =>{ this.pokemons = result});
      console.log(this.loc);
    }
  }

  get Name() {
    return this._name;
  }

  set Name(value: string) {
    this._name = value;
  }

  get Type() {
    return this._type;
  }

  set Type(value: string) {
    this._type = value;
  }

  add(){
    this._svc.postPokemon(this._name, this._type).subscribe((data:any) => {console.log(data)})
  }

  get ID() {
    return this._id;
  }

  set ID(value: string) {
    this._id = value;
  }

  delete(){
    this._svc.deletePokemon(this._id).subscribe((data:any) => {console.log(data)})
  }
}
