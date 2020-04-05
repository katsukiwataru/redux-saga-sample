import React from 'react';
import { useDispatch } from 'react-redux';

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const incrementAsync = () => {
    dispatch({ type: 'INCREMENT_ASYNC' });
  };

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Increment after 1 second</button>
    </div>
  );
};
