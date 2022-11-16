import React from 'react'

import Home1 from "./herbal/Components/Home1"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Business from './herbal/Navbar2 pages/Business'
import Allproducts from "./herbal/Navbar2 pages/Allproducts"



const App = () => {
  return (
    <div>
      <Router>
      <Routes>
         <Route path='/' element={<Home1/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/home1' element={<Home1/>} />
        <Route path='/allproducts' element={<Allproducts/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
