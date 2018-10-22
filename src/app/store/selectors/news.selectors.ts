import { createSelector } from '@ngrx/store';
import { selectNewsState } from './index';
import { News } from '../../models/news';

/**
 * Get News Section Selector
 */
export const getNewsSection = createSelector(
    selectNewsState,
    news => news.sectionNews
)

/**
 * Get Filter SubSection Section Selector
 */
export const getFilterSubSection = createSelector(
    selectNewsState,
    news => news
)

export const getCurrentNewsSection = createSelector(
    selectNewsState,
    news => news.currentNewsSection
)