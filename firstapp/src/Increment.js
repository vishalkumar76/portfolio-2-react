import React from 'react'

import { useState } from 'react';

export default function Increment(props) {
    
    const[counter,setCounter]=useState(parseInt(props.count));
    const Increment=()=>{
        setCounter(counter+1);
    }
    const Decrement=()=>{
        setCounter(counter-1);
    }
  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>

    </div>
  )
}
