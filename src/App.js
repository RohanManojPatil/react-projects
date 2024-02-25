import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import data from './components/data';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const[tours, removeTour] = useState(data);
  return (
    <div>
        <h1>Travel Agent</h1>
        <Cards tours = {tours}></Cards>
    </div>
    
  );
}

export default App;
