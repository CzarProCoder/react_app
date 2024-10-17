import React from 'react';
import './App.css';
import FoodList from './Food';
import ChuckNorrisJokes from './ChuckNorrisJokes';

function App() {
  return (
    <div className="app-container">
      <div className="jokes-section">
        <ChuckNorrisJokes />
        <br />
        <br />
      </div>
      <div className="food-section">
        <FoodList />
      </div>
    </div>
  );
}

export default App;
