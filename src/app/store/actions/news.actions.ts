import { Action } from '@ngrx/store';

/**
 * News Action Types
 */
export enum NewsActionTypes {
    LOAD_SECTION_NEWS = '[News App] Load Section News',
    FILTER_SUB_SECTION = '[News App] Filter SubSection'
}

/**
 * News Action Creators
 */

 /**
  * Load News Section Action
  */
export class LoadNewsSection implements Action {
    readonly type = NewsActionTypes.LOAD_SECTION_NEWS;
    constructor(public payload: string) {}
}

 /**
  * Filter SubSection Action
  */
 export class FilterSubSection implements Action {
    readonly type = NewsActionTypes.FILTER_SUB_SECTION;
    constructor(public payload: string) {}
}
 
/**
 * Union Type for Action Creators
 */
export type NewsActions = LoadNewsSection 
    | FilterSubSection;