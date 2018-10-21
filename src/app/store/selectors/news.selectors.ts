import { createSelector } from '@ngrx/store';
import { selectNewsState } from './index';

/**
 * Get News Section Selector
 */
export const getNewsSection = createSelector(
    selectNewsState,
    news => news
)

/**
 * Get Filter SubSection Section Selector
 */
export const getFilterSubSection = createSelector(
    selectNewsState,
    news => news
)