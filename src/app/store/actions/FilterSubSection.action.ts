import { Action } from '@ngrx/store';
import { NewsActionTypes } from './news.actions';

/**
 * Filter SubSection Action
 */

export class FilterSubSection implements Action {
    readonly type = NewsActionTypes.FILTER_SUB_SECTION;
    constructor(public payload: string) { }
}
