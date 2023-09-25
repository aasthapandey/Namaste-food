import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";
import "../../index.css";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRatingString} stars</h3>
      <h3>{sla?.deliveryTime} minutes</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;
