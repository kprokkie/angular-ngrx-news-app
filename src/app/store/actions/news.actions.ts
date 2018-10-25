import { Action } from '@ngrx/store';
import { News } from '../../models/news';

/**
 * News Action Types
 */
export enum NewsActionTypes {
    CURRENT_NEWS_SECTION = '[News App] Current News Section',
    LOAD_SECTION_NEWS = '[News App] Load Section News',
    LOAD_SECTION_NEWS_SUCCESS = '[News App] Load Section News Success',
    LOAD_SECTION_NEWS_FAILURE = '[News App] Load Section News Failure',
    FILTER_SUB_SECTION = '[News App] Filter SubSection'
}

/**
 * News Action Creators
 */
 /**
  * Filter SubSection Action
  */
 export class CurrentNewsSection implements Action {
    readonly type = NewsActionTypes.CURRENT_NEWS_SECTION;
    constructor(public payload: string) {}
}

 /**
  * Load News Section Action [Effect]
  */
export class LoadNewsSection implements Action {
    readonly type = NewsActionTypes.LOAD_SECTION_NEWS;
    constructor(public payload: string) {}
}

 /**
  * Load News Section Action [Success]
  */
export class LoadNewsSectionSuccess implements Action {
    readonly type = NewsActionTypes.LOAD_SECTION_NEWS_SUCCESS;
    constructor(public payload: News[]) {}
}

 /**
  * Load News Section Action [Failure]
  */
export class LoadNewsSectionFailure implements Action {
    readonly type = NewsActionTypes.LOAD_SECTION_NEWS_FAILURE;
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
export type NewsActions = CurrentNewsSection
    | LoadNewsSection 
    | LoadNewsSectionSuccess
    | LoadNewsSectionFailure
    | FilterSubSection;