import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PokemonService {

  constructor(private _http: HttpClient) { }

  getallPokemon(page: number = 0): any {
    return this._http.get<any>('http://localhost:60400/api/pokemon?page=' + page );
  }

  getPokemonbyID(ID: number): any {
    return this._http.get<any>('http://localhost:60400/api/pokemon/id/'+ID);
  }

  getPokemonbyName(name: string): any {
    return this._http.get<any>('http://localhost:60400/api/pokemon?name='+name);
  }

  postPokemon(name: string, type: string): any {
    return this._http.post('http://localhost:60400/api/pokemon',{
        Name: name,
        Type: type
    });
  }

  putPokemon(id: number, name: string, type: string): any {
    
    return this._http.put('http://localhost:60400/api/pokemon/'+id,{
      Name: name,
      Type: type
    });
  }

  deletePokemon(id: string): any {
    return this._http.delete('http://localhost:60400/api/pokemon/'+ id);
  }

}

export interface Pokemon{
  ID: number;
  Name: string;
  Type: string;
}