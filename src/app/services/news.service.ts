import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NewsInfo } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiURL: string = '';

  constructor(private http: HttpClient) { }

  /**
   * Getting section news via http call
   * @param section - section of news to be fetched
   */
  getSectionNews(section: string): Observable<NewsInfo> {
    this.apiURL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=315a5a51483b469a918246dc2753b339`;

    return this.http.get<NewsInfo>(this.apiURL)
      .pipe(
        // tslint:disable-next-line:no-console
        tap(data => console.log(data)))
  }
}
