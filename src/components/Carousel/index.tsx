import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import {
  Mojito,
  cPakora,
  Fish,
  Icecream,
  Strawberry,
  Blueberries,
  Rice,
  Rice1,
} from "../../components/Assets";
import { FoodItem } from "../../../types";
import { useStateValue } from "../../context/StateProvider";
import { SingleFoodItem } from "../../components/FoodItem";
import { Title } from "../../components/Sections";
const Caraousel = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <div className="pt-[40px]">
      <div className="flex items-center justify-center w-full pb-[40px]">
        <Title title={"Trending Dishes"} center />
      </div>
      <div className="p-4 overflow-hidden ">
        <Carousel
          centerSlidePercentage={15}
          centerMode={true}
          autoPlay // Enables automatic sliding
          infiniteLoop // Allows the slider to loop infinitely
          showThumbs={false} // Hides the thumbnail navigation
          showStatus={false} // Hides the status indicator
          interval={3000} // Sets the interval between slides (in milliseconds)
          showArrows={true}
        >
          {foodItems &&
            foodItems.map((item: FoodItem) => (
              <SingleFoodItem
                key={item.id}
                item={item}
                col={false}
                admin={false}
              />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Caraousel;
