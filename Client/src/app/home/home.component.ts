import { Component } from "@angular/core";
import { BeerService, BarObject } from "../services/beer.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent
{
    beers : BarObject[];

    constructor(private _svc : BeerService) { }

    ngOnInit() {
        this._svc.getBarList().subscribe(result => this.beers = result);
    }


}