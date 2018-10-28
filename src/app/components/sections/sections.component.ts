import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// ngrx store
import { AppState } from '../../store/reducers';
import { getAllSections } from '../../store/selectors/sections.selectors';

@Component({
  selector: 'nyt-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})

export class SectionsComponent implements OnInit {

  allSections$: Observable<Array<string>>;
  allSections: Array<string> = [];
  unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store<AppState>,
    private router: Router) { }

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
    // TWO ways to pick data
    // 1. as a observable and directly bind to template using async pipe
    // subsciption & unsubscription not required as angular does for us
    this.allSections$ = this.store.select(getAllSections);

    // 2. subscribe the store and mutute the data if required before display
    this.store.pipe(select(getAllSections))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        allSections => {
          this.allSections = allSections;
        }
      );

  }

  /**
   * Navigate and load different section of news -- alternative way
   * @param section - section news
   */
  sectionNews(section: string): void {
    this.router.navigate(['/section', section]);
  }

}
