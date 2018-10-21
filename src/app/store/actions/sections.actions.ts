import { Action } from '@ngrx/store';

/**
 * Sections Action Types
 */
export enum SectionsActionTypes {
    LOAD_SECTIONS = '[News App] Load Sections',
    GET_CURRENT_SECTION = '[News App] Get Current Section'
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
 export class GetCurrentSection implements Action {
    readonly type = SectionsActionTypes.GET_CURRENT_SECTION;
    constructor() {}
}
 
/**
 * Union Type for Action Creators
 */
export type SectionsActions = LoadSections 
    | GetCurrentSection;