import React from 'react';
import SkipList from './SkipList.js';
import skipsData from './skipsData.json';
import './App.css'; // Optional styling

function App() {
  return (
    <div className="App">
      <h1>Skip Hire</h1>
      <SkipList skips={skipsData} />
    </div>
  );
}

export default App;
