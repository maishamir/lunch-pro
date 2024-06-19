import { useState } from 'react'
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Select from './components/Select/Select';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RestaurantDetails from './pages/RestaurantDetails/RestaurantDetails';
import Restaurants from './pages/Restaurants/Restaurants';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Hero />
      <Select/>
      <Routes>
        <Route path="/cuisine/:cuisineId" element={<Restaurants />} />
        <Route path="/restaurant/:restId" element={<RestaurantDetails />}/>
      </Routes>
      

    </BrowserRouter>
  )
}

export default App
