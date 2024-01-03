import logo from './logo.svg';
import './App.css';
import Data from './Data';
import { useState } from 'react';
import Tours from './components/Tours';

function App() {
  
  const handleRemove =(id)=>{
    const updatedTours = tour.filter((tour) => tour.id !== id);
    setdata(updatedTours);
  };
  const[tour,setdata]=useState(Data);

  return (
    <div className="App">
      <Tours toursPlan={tour} handleRemove={handleRemove}></Tours>

   
    </div>
  );
}

export default App;
