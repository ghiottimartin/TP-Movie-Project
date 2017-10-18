import { Component } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of'; 

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { MovieSearchService } from './movie-search.service';
import { Movie } from './movie';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: [ './movie-search.component.css' ],
  providers: [MovieSearchService]
})
export class MovieSearchComponent {
  movies: any;
  private searchTerms = new Subject<string>();

  constructor(
    private movieSearchService: MovieSearchService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.movieSearchService.search(term).subscribe(movies =>{
      console.log(movies);
      this.movies = movies.results});
  }
}
