import React from 'react'

let x=10;
let y=20;

export default function Task () {
  return (
    <div>
        <h1>Evaluting Expression</h1>
        <h3>
           {x}{">"}{y} : {x>y? "True":"False"} 
        </h3>
    </div>
  )
}
