import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NewsInfo } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiURL: string;

  constructor(private http: HttpClient) { }

  getSectionNews(section): Observable<NewsInfo> {
    this.apiURL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=315a5a51483b469a918246dc2753b339`;

    return this.http.get<NewsInfo>(this.apiURL)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError) 
      )
  }

  handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
