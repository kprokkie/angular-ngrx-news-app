import { News } from "../../models/news";
import { NewsActions, NewsActionTypes } from "../actions";

/**
 * News State Interface
 */
export interface NewsState {
    currentNewsSection: string,
    sectionNews: News[]
}

/**
 * Intial News State
 */
export const initialState: NewsState = {
    currentNewsSection: '',
    sectionNews: []
}

/**
 * News Reducer
 */
export function reducer(state: NewsState = initialState, action: NewsActions): NewsState {
    switch (action.type) {
        case NewsActionTypes.CURRENT_NEWS_SECTION: console.log('CURRENT_NEWS_SECTION');
            return {
                ...state,
                currentNewsSection: action.payload
            };
        case NewsActionTypes.LOAD_SECTION_NEWS_SUCCESS: console.log('LOAD_SECTION_NEWS SU');
            return {
                ...state, 
                sectionNews: action.payload
            };
        case NewsActionTypes.LOAD_SECTION_NEWS_FAILURE: console.log('LOAD_SECTION_NEWS FA');
            return state;
        case NewsActionTypes.FILTER_SUB_SECTION: console.log('FILTER_SUB_SECTION');
            return state;
        default:
            return state;
    }
}
