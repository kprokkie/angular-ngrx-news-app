import { Action } from '@ngrx/store';
import { SectionsActionTypes } from './sections.actions';

/**
 * Current Section Action
 */

export class SetCurrentSection implements Action {
  readonly type = SectionsActionTypes.SET_CURRENT_SECTION;
  constructor(public payload: string) { }
}
