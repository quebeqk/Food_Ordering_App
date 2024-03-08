import { useState, useEffect } from "react";
import { RESLIST_API } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESLIST_API);

    const json = await data.json();

    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = (text) => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.4
    );
    setFilteredRestaurant(filteredList);
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    handleSearch,
    handleFilter,
  };
};

export default useRestaurantList;
