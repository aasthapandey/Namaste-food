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
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg h-40 w-[100%]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-extrabold py-4 text-lg">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRatingString} stars</h3>
      <h3>{costForTwo}</h3>
      <h3>{sla?.deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
