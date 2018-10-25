import { News } from "../../models/news";
import { NewsActions, NewsActionTypes } from "../actions/news.actions";

/**
 * News State Interface
 */
export interface NewsState {
    currentNewsSection: string,
    filterNewsSection: string,
    sectionNews: News[]
}

/**
 * Intial News State
 */
export const initialState: NewsState = {
    currentNewsSection: '',
    filterNewsSection: '',
    sectionNews: []
}

/**
 * News Reducer
 */
export function reducer(state: NewsState = initialState, action: NewsActions): NewsState {
    switch (action.type) {
        case NewsActionTypes.CURRENT_NEWS_SECTION:
            return {
                ...state,
                currentNewsSection: action.payload
            };
        case NewsActionTypes.LOAD_SECTION_NEWS_SUCCESS:
            return {
                ...state, 
                filterNewsSection: '',
                sectionNews: action.payload
            };
        case NewsActionTypes.LOAD_SECTION_NEWS_FAILURE:
            return state;
        case NewsActionTypes.FILTER_SUB_SECTION:
            return { 
                ...state,
                filterNewsSection: action.payload
            };
        default:
            return state;
    }
}
