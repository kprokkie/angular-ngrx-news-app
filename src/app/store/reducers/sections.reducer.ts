/**
 * Section State Interface
 */
export interface SectionsState {
    allSections: Array<string>;
    currentSections: string;
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
        'theatre',
        'fashion',
        'food',
        'travel',
        'magazine',
        'realestate',
        'automobiles'
    ],
    currentSections: 'home'
}

/**
 * Sections Reducer
 */
export function reducer(state: SectionsState = initialState, actions): SectionsState {
    switch (actions.type) {
        case 'LOAD_SECTIONS': console.log('LOAD_SECTIONS');
            return state;
        default:
            return state;
    }
}
