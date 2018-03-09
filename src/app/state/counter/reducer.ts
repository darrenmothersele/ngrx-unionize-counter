import { CounterActions, CounterActionsType } from './actions';

// The interface definition for this section of the store

export interface CounterState {
  value: number;
}

// Default values for initialisation

const initialValue: CounterState = {
  value: 0
};

// The `match()` helper method from `unionize` provides a more
// declarative way of defining reducer functions over the standard switch statement.
// A fallback of `() => state` is provided so the reducer can match
// other actions for which handler methods have not been defined.

export function counterReducer(state: CounterState = initialValue, action: CounterActionsType): CounterState {
  return CounterActions.match({

    // The name of the method matches the action name defined in `actions.ts`
    // NB: these methods are not mutating state.
    // A new state must be returned.

    increaseValue(amount) {
      return { value: state.value + amount };
    },

    decreaseValue(amount) {
      return { value: state.value - amount };
    }

// If this `() => state` fallback is not provided then the TypeScript
// checker will ensure that all cases (actions) are covered.
  }, () => state)(action);
}
