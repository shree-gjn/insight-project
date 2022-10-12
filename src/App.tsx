import React from 'react';
import './App.css';
import Sample from './Components/Sample';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Login to Insight Global
        </p>
        <Login />
        <Sample />
      </header>
      { /* Sidebar */}

      { /* Inner container */}
    </div>
  );
}

export default App;
