import React from 'react';
import './App.css';
import Sample from './Components/Sample';
import Login from './Components/Login';
import MainRoutes from './Components/Routes';

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
      <MainRoutes/>
    </div>
  );
}

export default App;
