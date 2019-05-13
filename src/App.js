import React from 'react';
import Mock from './components/Mock'
//挂载 Mock
import './mock/data1.js'
import './mock/data2.js'

function App() {
  return (
    <div className="App">
      <Mock />

    </div>
  );
}

export default App;
