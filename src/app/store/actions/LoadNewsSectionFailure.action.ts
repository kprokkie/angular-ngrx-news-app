import { Action } from '@ngrx/store';
import { NewsActionTypes } from './news.actions';

/**
 * Load News Section Action [Failure]
 */

export class LoadNewsSectionFailure implements Action {
    readonly type = NewsActionTypes.LOAD_SECTION_NEWS_FAILURE;
    constructor(public payload: string) { }
}
