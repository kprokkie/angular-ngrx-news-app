import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import * as fromActions from '../../store/actions';
import { getNewsSection, getFilterSubSection } from '../../store/selectors/news.selectors';
import { News } from '../../models/news';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  initSubscriptions(): void {

    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(params => {
        //console.log(params);
        this.store.dispatch(new fromActions.LoadNewsSection(params.section));
      });

    // this.store.pipe(select(getNewsSection))
    //   .pipe(takeUntil(this.unsubscribe))
    //   .subscribe(
    //     sectionNews => {
    //       this.sectionNews = sectionNews;
    //       console.log(this.sectionNews);
    //     }
    //   );

    this.store.pipe(select(getFilterSubSection))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        sectionNews => {
          this.sectionNews = sectionNews;
          console.log(this.sectionNews);
        }
      );

  }

}
