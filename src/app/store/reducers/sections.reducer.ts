import { SectionsActions, SectionsActionTypes } from '../actions/sections.actions';

/**
 * Section State Interface
 */
export interface SectionsState {
    allSections: Array<string>;
    currentSection: string;
}

/**
 * Intial Sections State
 */
export const initialState: SectionsState = {
    allSections: [
        'home',
        'opinion',
        'world',
        'national',
        'politics',
        'business',
        'technology',
        'science',
        'health',
        'sports',
        'arts',
        'books',
        'movies',
        'theater',
        'fashion',
        'food',
        'travel',
        'magazine',
        'realestate',
        'automobiles'
    ],
    currentSection: 'home'
}

/**
 * Sections Reducer
 */
export function reducer(state: SectionsState = initialState, action: SectionsActions): SectionsState {
    switch (action.type) {
        case SectionsActionTypes.LOAD_SECTIONS:
            return state;
        case SectionsActionTypes.SET_CURRENT_SECTION:
            return {
                ...state,
                currentSection: action.payload
            };
        default:
            return state;
    }
}
