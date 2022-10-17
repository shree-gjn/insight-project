import React from 'react';
import './App.css';
import MainRoutes from './Components/Routes';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      { /* Sidebar */}
      <Sidebar/>
      { /* Inner container */}
      <MainRoutes/>
    </div>
  );
}

export default App;
