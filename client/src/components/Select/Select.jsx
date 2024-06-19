import { useState, useEffect } from "react";
import axios from "axios";

function Select({ onCuisineChange }) {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/restaurants");
        const data = response.data;

        const uniqueCuisines = Array.from(new Set(data.map(rest => rest.cuisine))).map(cuisine => {
          return {
            name: cuisine,
            slug: data.find(rest => rest.cuisine === cuisine).slug
          };
        });
        setCuisines(uniqueCuisines);
      } catch (error) {
        console.error("Couldn't fetch data", error);
      }
    };
    fetchCuisines();
  }, []);

  function handleSelectChange(event) {
    onCuisineChange(event.target.value);
  }

  return (
    <div>
      <label htmlFor="cuisine">Choose a type of cuisine</label>
      <br />
      <select name="cuisine" id="cuisine" onChange={handleSelectChange}>
        {cuisines.map((cuisine, index) => (
          <option key={index} value={cuisine.slug}>
            {cuisine.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
