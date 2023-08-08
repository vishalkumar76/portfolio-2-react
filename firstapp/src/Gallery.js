import React from 'react'

let obj={name:"vishal",branch:"CSDS"}

export default function Gallery (props) {
  return (
    <div>
         <img src={props.url}/>
         <h1>Welcome Mr.{obj.name}. your branch is {obj.branch}</h1>
    </div>
  );
}
