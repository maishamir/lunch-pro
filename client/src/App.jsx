import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Select from './components/Select/Select';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RestaurantDetails from './pages/RestaurantDetails/RestaurantDetails';
import Restaurants from './pages/Restaurants/Restaurants';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [navigateTo, setNavigateTo] = useState(null);

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
    setNavigateTo(`/cuisine/${cuisine}`);
  };

  return (
    <BrowserRouter>
      <Nav />
      <Hero />
      <Select onCuisineChange={handleCuisineChange} />
      {navigateTo && <Navigate to={navigateTo} replace={true} />}
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/cuisine/:slug" element={<Restaurants selectedCuisine={selectedCuisine} />} />
        <Route path="/restaurant/:restId" element={<RestaurantDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
