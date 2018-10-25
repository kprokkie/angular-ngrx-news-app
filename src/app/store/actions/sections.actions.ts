import { Action } from '@ngrx/store';

/**
 * Sections Action Types
 */
export enum SectionsActionTypes {
    LOAD_SECTIONS = '[News App] Load Sections',
    SET_CURRENT_SECTION = '[News App] Set Current Section'
}

/**
 * Sections Action Creators
 */

 /**
  * Load Sections Action
  */
export class LoadSections implements Action {
    readonly type = SectionsActionTypes.LOAD_SECTIONS;
    constructor() {}
}

 /**
  * Current Section Action
  */
 export class SetCurrentSection implements Action {
    readonly type = SectionsActionTypes.SET_CURRENT_SECTION;
    constructor(public payload: string) {}
}
 
/**
 * Union Type for Action Creators
 */
export type SectionsActions = LoadSections 
    | SetCurrentSection;