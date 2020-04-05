import React from 'react';
import { Counter } from './Counter';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const App: React.FC = () => {
  const count = useSelector<RootState, number>((state) => state.counter.number);
  return (
    <div>
      <p>click {count}</p>
      <Counter />
    </div>
  );
};

export default App;
