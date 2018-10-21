import * as sections from './sections.reducer';
import * as news from './news.reducer';

/**
 * App State Interface
 */
export interface AppState {
    sections: sections.SectionsState,
    news: news.NewsState
}

/**
 * Initial Application State
 */
export const initialState: AppState = {
    sections: sections.initialState,
    news: news.initialState
}

/**
 * App Reducer
 */
export const reducers = {
    sections: sections.reducer,
    news: news.reducer
}



