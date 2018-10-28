import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { News } from '../../models/news';

// ngrx store 
import { AppState } from '../../store/reducers';
import { getNewsSection } from '../../store/selectors/news.selectors';
import * as fromActions from '../../store/actions';

@Component({
  selector: 'nyt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  sectionNews: News[];
  currentSubSection: string;
  subSectionsNavItems: string[] = [];
  unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.initSubscriptions();
  }

  /**
   * Holding Subscriptions
   */
  initSubscriptions(): void {

    // subscription to store & selector to pull all section news
    this.store.pipe(select(getNewsSection))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        sectionNews => {
          this.currentSubSection = '';
          this.subSectionsNavItems = [];
          for (const item of sectionNews) {
            // pulling all subsection which is unique and non empty
            if (item.subsection.length && !this.subSectionsNavItems.includes(item.subsection)) {
              this.subSectionsNavItems.push(item.subsection);
            }
          }
        }
      );

  }

  /**
   * Filter news by dispatching subsection filter action
   * @param filter - subsection string
   */
  filterNews(filter: string): void {
    this.currentSubSection = filter;
    this.store.dispatch(new fromActions.FilterSubSection(filter));
  }

}
