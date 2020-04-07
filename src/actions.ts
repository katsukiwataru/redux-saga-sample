import { Action } from 'redux';

interface Increment extends Action {
  type: 'INCREMENT';
  payload: number;
}

interface IncrementIfOdd extends Action {
  type: 'INCREMENT_IF_ODD';
  payload: number;
}

interface Decrement extends Action {
  type: 'DECREMENT';
  payload: number;
}

// export const decrementAction = (payload: number): Decrement => ({
//   type: 'DECREMENT',
//   payload,
// });

// export const incrementAction = (payload: number): Increment => ({
//   type: 'INCREMENT',
//   payload,
// });

// export const incrementAsyncAction = (payload: number): IncrementIfOdd => ({
//   type: 'INCREMENT_IF_ODD',
//   payload,
// });

export type Actions = Increment | IncrementIfOdd | Decrement;
