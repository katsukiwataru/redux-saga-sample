import { Action } from 'redux';

interface Increment extends Action {
  type: 'INCREMENT';
}

interface IncrementIfOdd extends Action {
  type: 'INCREMENT_IF_ODD';
}

interface Decrement extends Action {
  type: 'DECREMENT';
}

interface ErrorInPut extends Action {
  type: 'ACTION_ERROR_IN_PUT';
}

export type Actions = Increment | IncrementIfOdd | Decrement | ErrorInPut;
