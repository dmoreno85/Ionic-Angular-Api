import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private APIKEY = '35353ec902d37baa235f3abb3309f092';
  constructor(private http: HttpClient) { }

  searchMovies(query: String): Observable<Object> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`)
  };
}
