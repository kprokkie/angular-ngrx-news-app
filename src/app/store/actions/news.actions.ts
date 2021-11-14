import { Action } from '@ngrx/store';
import { FilterSubSection } from './FilterSubSection.action';
import { LoadNewsSection } from './LoadNewsSection.action';
import { LoadNewsSectionFailure } from './LoadNewsSectionFailure.action';
import { LoadNewsSectionSuccess } from './LoadNewsSectionSuccess.action';

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
  constructor(public payload: string) { }
}

/**
 * Union Type for Action Creators
 */
export type NewsActions = CurrentNewsSection
  | LoadNewsSection
  | LoadNewsSectionSuccess
  | LoadNewsSectionFailure
  | FilterSubSection;
