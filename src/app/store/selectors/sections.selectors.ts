import { createSelector } from '@ngrx/store';
import { selectSectionsState } from './index';

/**
 * Get All Sections Selector
 */
export const getAllSections = createSelector(
    selectSectionsState,
    sections => sections.allSections
)

/**
 * Get Current Section Selector
 */
export const getCurrentSection = createSelector(
    selectSectionsState,
    sections => sections.currentSection
)