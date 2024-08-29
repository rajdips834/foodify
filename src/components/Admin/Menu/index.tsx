import { FaSearch } from "react-icons/fa";
import { FoodItem } from "../../../../types";
import { SingleFoodItem } from "../../FoodItem";
import React, { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";

const Menu = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const [query, setQuery] = useState("");
  const [filteredFoodItems, setFilteredFoodItems] =
    useState<FoodItem[]>(foodItems);

  const filterFood = () => {
    if (query.length === 0) {
      setFilteredFoodItems(foodItems);
    } else {
      const filteredFoodItems = foodItems.filter((foodItem: FoodItem) =>
        foodItem.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFoodItems(filteredFoodItems);
    }
  };
  const searchFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    filterFood();
  };
  return (
    <div className="flex flex-col justify-center w-full">
      {/* search bar */}
      <div className="flex justify-center w-full p-2 mb-4 bg-white rounded-lg">
        <input
          className="w-full p-2 rounded-lg outline-none "
          type="text"
          placeholder="Search food"
          value={query}
          onChange={(e) => searchFood(e)}
        />
        {/* search button */}
        <button className="flex items-center justify-center gap-3 px-4 py-2 font-bold text-purple-700 rounded-lg">
          <FaSearch />
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-3 overflow-x-hidden">
        {filteredFoodItems.map((item: FoodItem) => (
          <SingleFoodItem key={item.id} item={item} col admin />
        ))}
      </div>
    </div>
  );
};

export default Menu;
