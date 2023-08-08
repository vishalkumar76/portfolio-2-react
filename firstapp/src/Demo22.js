import React from 'react'

let x=[{name:"vishal",branch:"CSDS", roll:"1"},
{name:"mukul",branch:"CSDS",roll:"2"},
{name:"shubham",branch:"CSDS",roll:"3"},
{name:"shailesh",branch:"CSDS",roll:"4"}]

export default function Demo22() {
  return (
    <div>{
      x.map(
        (obj)=>{
          return(
            <p>your Name is{obj.name} and branch is{obj.branch}and rollNo is:{obj.roll}</p>
          );
        }
      )
      }
    </div>
  
  )
}
