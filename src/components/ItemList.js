import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div>
              <div className="py-2 w-9/12 ">
                <span>{item.card.info.name} - </span>
                <span>
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-gray-500 max-w-lg">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-3/12 p-4 h-3/4">
              <div className="absolute">
                <button className="px-3 py-2 mx-16 bg-white shadow-lg rounded border-spacing-1 border-l-gray-400 text-sm text-green-600">
                  ADD+
                </button>
              </div>
              <img
                className="rounded-lg"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
