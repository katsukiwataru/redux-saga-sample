import { Reducer } from 'redux';
import { Actions } from './actions';

export interface CounterState {
  number: number;
}

const initialState: CounterState = {
  number: 0,
};

export const reducer: Reducer<CounterState, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, number: state.number + 1 };
    case 'INCREMENT_IF_ODD':
      return { ...state, number: state.number % 2 !== 0 ? state.number + 1 : state.number };
    case 'DECREMENT':
      return { ...state, number: state.number - 1 };
    // case 'INCREMENT':
    //   return { ...state, number: action.payload };
    // case 'INCREMENT_IF_ODD':
    //   return { ...state, number: action.payload };
    // case 'DECREMENT':
    //   return { ...state, number: action.payload };
    default:
      return { ...state };
  }
};
