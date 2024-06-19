import { useState } from 'react'
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Select from './components/Select/Select';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RestaurantDetails from './pages/RestaurantDetails/RestaurantDetails';
import Restaurants from './pages/Restaurants/Restaurants';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Hero />
      <Select/>
      <Routes>
        <Route path="/" element={<RestaurantDetails/>}/>
        <Route path="/cuisine/:cuisineId" element={<Restaurants />} />
        <Route path="/restaurant/:restId" element={<RestaurantDetails />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      

    </BrowserRouter>
  )
}

export default App
