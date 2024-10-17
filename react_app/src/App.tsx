import React from 'react';
import './App.css';
import FoodList from './Food';
import ChuckNorrisJokes from './ChuckNorrisJokes';

function App() {
  return (
    <div>
      <div>
        <ChuckNorrisJokes />
        <br/>
        <br/>
      </div>
      <div className="App">
        <FoodList />
      </div>
    </div>

  );
}

export default App;
