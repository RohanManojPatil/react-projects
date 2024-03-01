import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import data from './components/data';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const[tours, setTour] = useState(data);

  function refreshPage()
  {
      setTour(data);
  }
  if(tours.length <= 0)
  {
    return (
    <div className='refreshPage'>
        <h1 className='noTour'> No Tours left</h1>
        <button className='refresh' onClick={refreshPage}>Go Back</button>
`    </div>
    );
  }
  function removeData(id) {
    // Filter out the tour with the specified id
    const updatedTours = tours.filter(tour => tour.id !== id);
    // Update the state with the filtered tours
    setTour(updatedTours);
  }
  
  return (
    <div>
        <Cards tours = {tours} remove = {removeData}></Cards>
    </div>
    
  );
}

export default App;
