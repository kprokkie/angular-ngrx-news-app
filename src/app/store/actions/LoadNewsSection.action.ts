import { Action } from '@ngrx/store';
import { NewsActionTypes } from './news.actions';

/**
 * Load News Section Action [Effect]
 */

export class LoadNewsSection implements Action {
  readonly type = NewsActionTypes.LOAD_SECTION_NEWS;
  constructor(public payload: string) { }
}
