import { Component } from '@angular/core';
import { MovieSearchService } from './movie-search.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieSearchService ]
})
export class HomeComponent {
  title = 'Bienvenidos a TheMovieDataBase';

  constructor(
  	private movieSearchService: MovieSearchService) {}
  
  movieId1: string;
  movieId2: string;
  movieId3: string;

  /*getTopThreeMovies(): number[] {
  	return this.movieSearchService.getTopThreeMovies();
  } */

}
