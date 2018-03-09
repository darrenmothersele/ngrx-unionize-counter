# NgRx Unionize Example

Yes, another counter example.

This repo exists to show the bare-bones implementation of NgRx using the
[unionize](https://github.com/pelotom/unionize) helper to create union types.
This reduces the amount of boilerplate when working with NgRx.

## AppStateModule

The main `AppState` interface and `ActionReducerMap` that defines the 
entire application state is found in `src/app/state`. The application
state is split into separate parts, in this case just the one: `counter`.

Check the comments in `actions.ts`, `reducer.ts` and `selectors.ts` in the `counter`
directory for more information. Also, check the comments in the main
`src/app/state/reducers.ts` file.

## Container/Presentation components

Although unecessary in a small example like this, the counter component
has been split into separate presentation and container components.
The "single responsibility principle" is followed. In this case
the presentation component found in `src/app/components` is just concerned
with how the component is presented. It has `Input()` properties and 
`Output()` events. The container component found in `src/app/containers`
is responsible for selecting the appropriate data to pass to the
presentation component, and dealing with the events it generates.
