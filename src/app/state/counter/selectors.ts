import { createSelector } from '@ngrx/store';
import { getCounterState } from '../reducers';

// Selector functions for use in container components

export const getCounterValue = createSelector(getCounterState, ({ value }) => value);
