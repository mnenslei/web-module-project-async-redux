import React from 'react';

import Crypto from './components/Crypto';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <h2>Find live Bitcoin prices!</h2>
      <Crypto />
    </div>
  );
}

export default App;