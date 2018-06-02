import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BooksComponent } from './books/books.component';
import { PokemonApiComponent } from './pokemon-api/pokemon-api.component';

import { AuthService } from './services/auth-service.service';
import { BooksService } from './services/books.service';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BooksComponent,
    PokemonApiComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "", component: HomeComponent},
      {path: "books", component: BooksComponent},
      {path: "pokemon", component: PokemonApiComponent}
    ], {useHash: true}),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthService,
    BooksService,
    PokemonService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
