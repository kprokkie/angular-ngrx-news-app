import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { News } from '../../models/news';

// ngrx store
import { AppState } from '../../store/reducers';
import { getFilterSubSection } from '../../store/selectors/news.selectors';
import * as fromActions from '../../store/actions';

@Component({
  selector: 'nyt-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  sectionNews: News[];
  unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store<AppState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initSubscriptions();
  }

  ngDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Holding Subscriptions
   */
  initSubscriptions(): void {

    // 1. subscribe to route and dispatch an action to load news for selected section
    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(params => {
        this.store.dispatch(new fromActions.LoadNewsSection(params.section));
      });

    // 2. subscribe to store and selector to load section news and filtered section news
    this.store.pipe(select(getFilterSubSection))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        sectionNews => {
          this.sectionNews = sectionNews;
        }
      );

  }

}
