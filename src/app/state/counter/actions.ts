import { unionize, ofType } from 'unionize';

// The `unionize()` helper function creates a union
// type for all the defined actions. This enables TypeScript
// checking of actions and NgRx related code,
// without the associated boilerplate of typed action classes.

// The 'type' and 'payload' keys are defined to follow
// NgRx conventions for the property names of actions.

export const CounterActions = unionize({
  increaseValue: ofType<number>(),
  decreaseValue: ofType<number>()
}, 'type', 'payload');

// A TypeScript type for these actions (used in the reducer function)

export type CounterActionsType = typeof CounterActions._Union;
