import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


function RestaurantDetails() {
  const [restaurant, setRestaurant] = useState(null);
  const { restId } = useParams();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/restaurants/${restId}`);
        setRestaurant(response.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchRestaurants();
  }, [restId])

  if (!restaurant) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Address: {restaurant.address}</p>
      <p>Phone: {restaurant.phone}</p>
    </div>
  )
}

export default RestaurantDetails