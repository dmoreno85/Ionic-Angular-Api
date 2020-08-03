import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  public movies: object = [];
  constructor(private movieService: MoviesService) { }

  ngOnInit() { }

  searchMovie(query) {
    const res = query.target.value;
    this.movieService.searchMovies(res).subscribe(value => {
      this.movies = value;
    });

  };
}
