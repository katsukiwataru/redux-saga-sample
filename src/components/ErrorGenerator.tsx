import React from 'react';
import { useDispatch } from 'react-redux';

export const ErrorGenerator: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({ type: 'ACTION_ERROR_IN_PUT' });
  };

  return (
    <div>
      <button onClick={onClick}>Action error in put</button>
    </div>
  );
};
