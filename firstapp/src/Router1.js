import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Card2 from './Card2';
import About from './About';

export default function Router1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elememt={<Card2/>}/>
        <Route path="/product" element={<Card2/>}/>
        <Route path="/about" element={<Card2/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
