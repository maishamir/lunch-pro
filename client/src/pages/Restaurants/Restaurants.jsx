import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Restaurants({ selectedCuisine }) {
  const [restaurants, setRestaurants] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchRests = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/cuisine/${slug}`);
        console.log
        setRestaurants(response.data);
      } catch (err) {
        console.error("Couldn't fetch data", err);
      }
    };
    fetchRests();
  }, [slug]);

  return (
    <div>
      <h1>Restaurants for {selectedCuisine} Cuisine</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Address: {restaurant.address}</p>
            {/* Add more details as needed */}
             <Link to={`/restaurant/${restaurant.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
