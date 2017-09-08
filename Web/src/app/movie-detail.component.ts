import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieSearchService } from './movie-search.service';
import { Movie } from './movie';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieSearchService]
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: any;
  private sub: any;
  movie: any;


  constructor(
  	private route: ActivatedRoute,
  	private movieSearchService: MovieSearchService) {}

  	ngOnInit() {
    	this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number 
       this.movieSearchService.getbyID(this.id).subscribe(movie =>
        this.movie = movie
        );
    	});
 
	}

	ngOnDestroy() {
    	this.sub.unsubscribe();
  	}
}
