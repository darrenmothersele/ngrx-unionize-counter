import { counterReducer, CounterState } from './counter/reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// The `AppState` is made up of separate state interfaces
// and the corresponding reducer functions for each section
// of state, split into separate sub-folders for ease of
// management.

export interface AppState {
  counter: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};

// Selector functions for each part of state are defined
// here because they are dependent on the name given to
// each part in the ActionReducerMap definition above.

// The string passed into `createFeatureSelector()` matches
// the key used in the AppState interface and ActionReducerMap.

export const getCounterState = createFeatureSelector('counter');
