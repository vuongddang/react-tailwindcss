import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-mono mt-4">
          Enjoy <span className="text-purple-400">TailwindCSS</span> in your <span className="text-green-400">React</span> app
        </p>
      </header>
    </div>
  );
}

export default App;
