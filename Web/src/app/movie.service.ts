import { Injectable } from '@angular/core';

import { Movie } from './movie';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {
	private moviesUrl = 'http://localhost:9000/api/movies';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getMovies(): Promise<Movie[]> {
  		return this.http.get(this.moviesUrl)
             .toPromise()
             .then(response => response.json().data as Movie[])
             .catch(this.handleError);
	}

	getMovie(texto: string): Promise<Movie> {
 		const url = `${this.moviesUrl}/search/${texto}`;
  		return this.http.get(url)
    		.toPromise()
    		.then(response => response.json().data as Movie)
    		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}
}
