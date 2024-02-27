import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import data from './components/data';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const[tours, setTour] = useState(data);

  if(tours.length <= 0)
  {
      alert("NO Tours are left");
  }
  function removeData(id) {
    // Filter out the tour with the specified id
    const updatedTours = tours.filter(tour => tour.id !== id);
    // Update the state with the filtered tours
    setTour(updatedTours);
  }
  
  return (
    <div>
        <h1 className="title">Travel Agent</h1>
        <Cards tours = {tours} remove = {removeData}></Cards>
    </div>
    
  );
}

export default App;
