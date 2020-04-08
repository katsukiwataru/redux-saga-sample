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

interface ErrorInPut extends Action {
  type: 'ACTION_ERROR_IN_PUT';
  payload: number;
}

export type Actions = Increment | IncrementIfOdd | Decrement | ErrorInPut;
