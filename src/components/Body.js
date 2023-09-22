import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchtext] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4929386&lng=77.0945017&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(listOfRestaurant.length === 0) {
        return(
            <div>
                <h2>
                <Shimmer />
                </h2>
            </div>
        );
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchtext(e.target.value);
                    }}/>
                    <button onClick={ () => {
                        const searchedRestaurant = listOfRestaurant.filter((res) => res?.info?.name.toLowerCase().includes(searchText));
                        console.log('searchedRestaurant', searchedRestaurant);
                        setFilteredRestaurant(searchedRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    console.log('Button clicked');
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRatingString > 4
                    );
                    setFilteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
}

export default Body;