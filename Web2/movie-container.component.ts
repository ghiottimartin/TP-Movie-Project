import { Component, Input } from '@angular/core';

@Component({
	selector: 'movie-container',
	templateUrl:'./movie-container.component.html',
	styleUrls: ['./movie-container.component.css']
})

export class MovieContainerComponent {
	 @Input() movieId: string;
}