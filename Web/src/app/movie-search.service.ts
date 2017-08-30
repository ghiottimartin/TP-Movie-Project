import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Movie }           from './movie';
import { MovieService } from './movie.service';

@Injectable()
export class MovieSearchService {
	private movies: Observable<Movie[]>;
	private movieService: MovieService;

  constructor(private http: Http) {}

  search(term: string): Observable<any> {
    return this.http
               .get(`http://localhost:9000/api/movies/search/:${term}`)
               .map(response => { 
               	
               	return response.json()
               });
  }
}