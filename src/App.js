// src/App.js
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [allFoods] = useState(foods)
  allFoods.map ((food) => {
    return <FoodBox food={ food } />
  })
  return <div className="App"></div>;

}
export default App;