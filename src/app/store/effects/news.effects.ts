import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import * as fromActions from '../actions';
import { mergeMap, map, catchError } from '../../../../node_modules/rxjs/operators';
import { NewsService } from '../../services/news.service';
import { NewsInfo } from '../../models/news';
import { LoadNewsSection } from '../actions';

@Injectable()
export class NewsEffects {

    constructor(private actions$: Actions,
        private newsService: NewsService) { }

    @Effect()
    loadNews$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.NewsActionTypes.LOAD_SECTION_NEWS),
        mergeMap((action: LoadNewsSection) =>
            this.newsService.getSectionNews(action.payload).pipe(
                map((news: NewsInfo) => (new fromActions.LoadNewsSectionSuccess(news.results))),
                catchError(error => of(new fromActions.LoadNewsSectionFailure(error)))
            )
        )
    );
}