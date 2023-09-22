import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log('Button clicked');
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRatingString > 4
                    );
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
}

export default Body;