import { Action } from '@ngrx/store';
import { News } from '../../models/news';
import { NewsActionTypes } from './news.actions';

/**
 * Load News Section Action [Success]
 */

export class LoadNewsSectionSuccess implements Action {
    readonly type = NewsActionTypes.LOAD_SECTION_NEWS_SUCCESS;
    constructor(public payload: News[]) { }
}
