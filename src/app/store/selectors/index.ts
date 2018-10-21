import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

/**
 * Get App State
 */
export const getAppState = (state: AppState): AppState => state;

/**
 * Select Sections State
 */
export const selectSectionsState = createSelector(
    getAppState,
    (state: AppState) => state.sections
)

/**
 * Select News State
 */
export const selectNewsState = createSelector(
    getAppState,
    (state: AppState) => state.news
)