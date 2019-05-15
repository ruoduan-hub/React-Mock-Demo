import React from 'react';
import Mock from './components/Mock'
import HookMock from './components/Hook-Mock'
import EffectHook from './components/EffectHook'
//挂载 Mock
import './mock/data1.js'
import './mock/data2.js'

function App() {
  return (
    <div className="App">
      <Mock />
      <HookMock />
      <EffectHook />

    </div>
  );
}

export default App;
