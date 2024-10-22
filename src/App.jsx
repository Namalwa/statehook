import { useState } from 'react';
import React from 'react';
import './App.css'

function App() {
const [count, setcount] = useState(2)

function decreasecount(){
  setcount(previouscount => previouscount-1)
}

function increasecount(){
  setcount(previouscount => previouscount+1)
}

  return (
    <div className='container'>
    <button onClick={decreasecount}>-</button>
    <span>{count}</span>
    <button onClick={increasecount}>+</button>
  
    </div>
  )
}

export default App
