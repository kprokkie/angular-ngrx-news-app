/**
 * News State Interface
 */
export interface NewsState {

}

/**
 * Intial News State
 */
export const initialState: NewsState = {
}

/**
 * News Reducer
 */
export function reducer(state: NewsState = initialState, actions): NewsState {
    switch (actions.type) {
        case 'LOAD_SECTION_NEWS': console.log('LOAD_SECTION_NEWS');
            return state;
        case 'FILTER_SUB_SECTION': console.log('FILTER_SUB_SECTION');
            return state;
        default:
            return state;
    }
}
