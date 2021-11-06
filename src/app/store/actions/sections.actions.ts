import { Action } from '@ngrx/store';
import { SetCurrentSection } from './SetCurrentSection.action';

/**
 * Sections Action Types
 */
export enum SectionsActionTypes {
  LOAD_SECTIONS = '[News App] Load Sections',
  SET_CURRENT_SECTION = '[News App] Set Current Section'
}

/**
 * Load Sections Action
 */
export class LoadSections implements Action {
  readonly type = SectionsActionTypes.LOAD_SECTIONS;
  // tslint:disable-next-line:no-empty
  constructor() { }
}

/**
 * Union Type for Action Creators
 */
export type SectionsActions = LoadSections
  | SetCurrentSection;
