import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { News } from '../../models/news';
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
  subSectionsNavItems: string[] = [];
  unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.initSubscriptions();
  }

  initSubscriptions(): void {

    this.store.pipe(select(getNewsSection))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        sectionNews => {
          this.subSectionsNavItems = [];
          for (const item of sectionNews) {
            if (item.subsection.length && !this.subSectionsNavItems.includes(item.subsection)) {
              this.subSectionsNavItems.push(item.subsection);
            }
          }
          //console.log(this.subSectionsNavItems);
        }
      );

  }

  filterNews(filter: string): void {
    this.store.dispatch(new fromActions.FilterSubSection(filter));
  }

}
