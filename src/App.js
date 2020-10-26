import React from 'react';
import './App.css';
import Counter from './components/counter';
import HocCounter from './components/hoc-counter';

function App() {
  return (
    <div>
     <h1>Counter Component Test</h1>
     <Counter></Counter>
     <hr />
     <h1>Below is HOC Example</h1>
     <hr />
      <HocCounter></HocCounter>
    </div>
  );
}

export default App;
