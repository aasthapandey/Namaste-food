import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowCategory }) => {
  const handleClick = () => {
    setShowCategory();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 border-b-2 drop-shadow-md bg-gray-50">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
