import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  public id = null;
  public movieDetail: object = null;
  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('movieId');

    this.movieService.movieByID(this.id).subscribe(value => {
      this.movieDetail = value;
      console.log(this.movieDetail);
    });
  }


}
