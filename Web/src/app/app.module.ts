import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search.component';
import { MovieService } from './movie.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ 
  	MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
