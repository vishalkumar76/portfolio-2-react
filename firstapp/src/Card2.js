import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Rating from './Rating';

let masterList=[
  {productName:"laptop",
url:"images/laptop.jpg",
price:"38946",
disc:"best for gaming"
},
{productName:"laptop",
url:"images/laptop.jpg",
price:"646465",
disc:"best for gaming"
},
{productName:"laptop",
url:"images/laptop.jpg",
price:"38946",
disc:"best for gaming"
}
]






export default function Card2() {
  return masterList.map(
    (prod)=>{
      return(
    <div className=' col-md-3 mb-4 mt-2 '  style={{marginLeft:"300px"}}>
        
        <div className="card" style={{width:"15rem"}}>
  <img src={prod.url} className="card-img-top mt-2 " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{prod.productName}</h5>
    <h5 className="card-title">{prod.price}
    </h5>
    <p class="card-text">kuch bhi</p>
   

    < Rating rating="5"/>
   
  </div>
</div>

    </div>

    

        
        

  )
}
  )
}




