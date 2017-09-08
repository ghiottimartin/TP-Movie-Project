import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search.component';
import { MovieService } from './movie.service';
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './nav-bar.component';


import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    HomeComponent,
    MovieDetailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
    
  ],
  providers: [ 
  	MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
