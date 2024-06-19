import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Restaurants({ selectedCuisine }) {
  const [restaurants, setRestaurants] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchRests = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/cuisine/${slug}`);
        setRestaurants(response.data);
      } catch (err) {
        console.error("Couldn't fetch data", err);
      }
    };
    fetchRests();
  }, [slug]);

  return (
    <div>
      <h1>Restaurants for {selectedCuisine || slug}</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Address: {restaurant.address}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
