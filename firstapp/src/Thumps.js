import React, { useState } from 'react'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Thumps() {
    const[color,setColor]=useState(null);
    const[like,setLike] =useState(parseInt(props.count))

    const onClick=()=>{
        if(color=="green"){
            setColor("black")
            setLike(like-1)
        }else{
            setColor("green")
            setLike(like +1)

            }
        }
        
    }
  return (
    <div className='ms-5 mt-5'></div>

  )
}
